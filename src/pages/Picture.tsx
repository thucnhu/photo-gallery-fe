import React, { useEffect, useReducer } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Post, PrimaryContainer, Comment, Icon } from '../components'
import { SERVER_BASE_URL } from '../constants/routes'
import { CommentProps } from '../types/props'
import postComment from '../api/comments'
import { getPic } from '../api/pictures'
import { postPicLike, deletePicLike } from '../api/likes'

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
}

type PictureAction =
	| {
			type: 'change'
			field: 'comment' | 'caption' | 'description'
			payload: string
	  }
	| { type: 'likePost' | 'unlikePost' }
	| { type: 'postComment'; payload: CommentProps[] }
	| { type: 'render'; payload: PictureState }

function pictureReducer(state: PictureState, action: PictureAction) {
	switch (action.type) {
		case 'render':
			return { ...state, ...action.payload }
		case 'change':
			return { ...state, [action.field]: action.payload }
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
	} = pictureState
	const { picId } = useParams<{ picId: string }>()
	const navigate = useNavigate()

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
		dispatch({ type: 'change', field: 'comment', payload: e.target.value })
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
		console.log('clicked')
	}

	return (
		<PrimaryContainer>
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
					<Icon.ThreeDots onClick={handleClickDots}></Icon.ThreeDots>
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
