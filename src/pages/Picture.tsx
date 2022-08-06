import React, { useEffect, useReducer, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useParams, useNavigate } from 'react-router-dom'
import {
	Post,
	PrimaryContainer,
	Comment,
	Icon,
	Popup,
	PictureModal,
} from '../components'
import { SERVER_BASE_URL } from '../constants/routes'
import { CommentProps, PictureProps } from '../types/props'
import { postComment } from '../api/comments'
import { getPic } from '../api/pictures'
import { postPicLike, deletePicLike } from '../api/likes'
import useClickOutside from '../hooks/useClickOutside'

const initialState = {
	comments: [],
	comment: '',
	caption: '',
	description: '',
	imgPath: '',
	likesCount: 0,
	commentsCount: 0,
	isLiked: false,
	username: '',
	createdAt: '',
	isOpen: false,
	isShowed: false,
}

type PictureState = {
	comments: CommentProps[]
	comment: string
	caption: string
	description: string
	imgPath: string
	likesCount: number
	isLiked: boolean
	commentsCount: number
	username: string
	createdAt: string
	isOpen: boolean
	isShowed: boolean
}

type PictureAction =
	| { type: 'changeComment'; payload: string }
	| {
			type:
				| 'likePost'
				| 'unlikePost'
				| 'closePopup'
				| 'togglePopup'
				| 'showModal'
	  }
	| { type: 'postComment'; payload: CommentProps[] }
	| { type: 'render'; payload: PictureState }

function pictureReducer(state: PictureState, action: PictureAction) {
	switch (action.type) {
		case 'render':
			return { ...state, ...action.payload }
		case 'changeComment':
			return { ...state, comment: action.payload }
		case 'likePost':
			return { ...state, likesCount: state.likesCount + 1, isLiked: true }
		case 'unlikePost':
			return { ...state, likesCount: state.likesCount - 1, isLiked: false }
		case 'postComment':
			return {
				...state,
				comments: action.payload,
				commentsCount: state.commentsCount + 1,
				comment: '',
			}
		case 'closePopup':
			return { ...state, isOpen: false }
		case 'togglePopup':
			return { ...state, isOpen: !state.isOpen }
		case 'showModal':
			return { ...state, isShowed: true, isOpen: false }
		default:
			return state
	}
}

const Picture: React.FC = () => {
	const [pictureState, dispatch] = useReducer(pictureReducer, initialState)
	const {
		comments,
		comment,
		caption,
		description,
		imgPath,
		likesCount,
		commentsCount,
		isLiked,
		username,
		createdAt,
		isOpen,
		isShowed,
	} = pictureState
	const { picId } = useParams<{ picId: string }>() as { picId: string }
	const navigate = useNavigate()
	const { auth } = useContext(AuthContext)
	const clickRef = useClickOutside(() => dispatch({ type: 'closePopup' }))
	let picture: PictureProps = {
		id: parseInt(picId),
		username: username,
		caption: caption,
		description: description,
		img_path: imgPath,
	}

	useEffect(() => {
		if (picId) {
			getPic(parseInt(picId))
				.then(({ data }) => {
					dispatch({
						type: 'render',
						payload: {
							comments: data.comments,
							comment: '',
							caption: data.caption,
							description: data.description,
							imgPath: SERVER_BASE_URL + data.img_path,
							likesCount: data.likes_count,
							commentsCount: data.comments_count,
							isLiked: data.is_liked,
							username: data.username,
							createdAt: data.created_at,
							isOpen: false,
							isShowed: false,
						},
					})
				})
				.catch(err => {
					if (err.response?.status === 404) {
						navigate('*')
					} else {
						alert('Please try again later!')
					}
				})
		}
	}, [picId, navigate])

	function handleChangeComment(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: 'changeComment', payload: e.target.value })
	}

	async function handlePostComment(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		try {
			if (picId) {
				const res = await postComment(parseInt(picId), comment)
				if (comments)
					dispatch({
						type: 'postComment',
						payload: [...comments, res.data],
					})
				else dispatch({ type: 'postComment', payload: [res.data] })
			}
		} catch (err: any) {
			console.log(err)
			alert('Error posting comment. Please try again later!')
		}
	}

	async function handleLike() {
		try {
			if (picId) {
				await postPicLike(picId.toString())
				dispatch({ type: 'likePost' })
			}
		} catch (err: any) {
			if (err.response?.status === 401) {
				alert('Please log in to like this picture')
			} else {
				alert('Please try again later!')
			}
		}
	}

	async function handleUnlike() {
		try {
			if (picId) {
				await deletePicLike(picId.toString())
				dispatch({ type: 'unlikePost' })
			}
		} catch (err: any) {
			alert('Error occured. Please try again later!')
		}
	}

	function handleClickDots() {
		dispatch({ type: 'togglePopup' })
	}

	function handleEdit() {
		dispatch({ type: 'showModal' })
		document.body.style.overflow = 'hidden'
	}

	function handleDelete() {}

	return (
		<PrimaryContainer>
			{isShowed && <PictureModal picture={picture} />}
			<Post>
				<Post.Caption>{caption}</Post.Caption>
				<Post.InfoArea>
					<Post.AvatarArea>
						<Post.Avatar src='https://i.pravatar.cc/302' />
						<Post.AvatarRightArea>
							<Post.Username>{username}</Post.Username>
							<Post.CreatedAt>{createdAt}</Post.CreatedAt>
						</Post.AvatarRightArea>
					</Post.AvatarArea>
					<div ref={clickRef}>
						{auth?.username === username && (
							<Icon.ThreeDots onClick={handleClickDots}></Icon.ThreeDots>
						)}
						{isOpen && (
							<Popup>
								<Popup.Item onClick={handleEdit}>
									Edit picture
								</Popup.Item>
								<Popup.Item onClick={handleDelete}>
									Delete picture
								</Popup.Item>
							</Popup>
						)}
					</div>
				</Post.InfoArea>
				<Post.Description>{description}</Post.Description>
				<Post.Picture src={imgPath} />

				<Post.Stats>
					<Post.LikesCount>
						{isLiked ? (
							<Icon.HeartFill onClick={handleUnlike}></Icon.HeartFill>
						) : (
							<Icon.Heart onClick={handleLike}></Icon.Heart>
						)}
						{likesCount}
					</Post.LikesCount>
					<Post.CommentsCount>
						<Icon.Comment></Icon.Comment>
						{commentsCount}
					</Post.CommentsCount>
				</Post.Stats>

				<Post.CommentForm onSubmit={handlePostComment}>
					<Post.CommentInput
						type='text'
						name='comment'
						value={comment}
						onChange={handleChangeComment}
						placeholder='Write a comment...'
						required
					/>
					<Post.CommentButton type='submit' color='gray'>
						Send
					</Post.CommentButton>
				</Post.CommentForm>

				{comments?.map(comment => (
					<Comment key={comment.id} comment={comment} />
				))}
			</Post>
		</PrimaryContainer>
	)
}

export default Picture
