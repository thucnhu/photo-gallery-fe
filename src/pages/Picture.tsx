import React, { useEffect, useReducer, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useParams, useNavigate } from 'react-router-dom'
import {
	Post,
	Container,
	Comment,
	Icon,
	DeletePopup,
	MainPopup,
	EditorPopup,
	UserList,
} from '../components'
import { HOME, SERVER_BASE_URL } from '../constants/routes'
import { CommentProps } from '../types/props'
import { postComment } from '../api/comments'
import { getPic, updatePic, deletePic } from '../api/pictures'
import { postPicLike, deletePicLike } from '../api/likes'
import useClickOutside from '../hooks/useClickOutside'

const initialState = {
	comments: [],
	comment: '',
	caption: '',
	description: '',
	imgPath: '',
	avatarPath: '',
	likesCount: 0,
	commentsCount: 0,
	isLiked: false,
	username: '',
	createdAt: '',
	isOpen: false,
	picPopupShowed: false,
	deletePopupShowed: false,
	captionInput: '',
	descriptionInput: '',
	likesListShowed: false,
	commentsListShowed: false,
}

type PictureState = {
	comments: CommentProps[]
	comment: string
	caption: string
	description: string
	imgPath: string
	avatarPath: string
	likesCount: number
	isLiked: boolean
	commentsCount: number
	username: string
	createdAt: string
	isOpen: boolean
	picPopupShowed: boolean
	deletePopupShowed: boolean
	captionInput: string
	descriptionInput: string
	likesListShowed: boolean
}

type PictureAction =
	| {
			type: 'change'
			field: 'comment' | 'captionInput' | 'descriptionInput'
			payload: string
	  }
	| {
			type:
				| 'likePost'
				| 'unlikePost'
				| 'closePopup'
				| 'togglePopup'
				| 'showPicEditor'
				| 'updateSucceed'
				| 'cancelUpdate'
				| 'cancelDelete'
				| 'deleteSucceed'
				| 'requestDelete'
				| 'showLikesList'
				| 'showCommentsList'
				| 'hideLikesList'
				| 'hideCommentsList'
	  }
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
		case 'closePopup':
			return { ...state, isOpen: false }
		case 'togglePopup':
			return { ...state, isOpen: !state.isOpen }
		case 'showPicEditor':
			return {
				...state,
				picPopupShowed: true,
				isOpen: false,
				captionInput: state.caption,
				descriptionInput: state.description,
			}
		case 'updateSucceed':
			return {
				...state,
				picPopupShowed: false,
				caption: state.captionInput,
				description: state.descriptionInput,
			}
		case 'cancelUpdate':
			return {
				...state,
				picPopupShowed: false,
				caption: state.caption,
				description: state.description,
			}
		case 'requestDelete':
			return { ...state, deletePopupShowed: true, isOpen: false }
		case 'cancelDelete':
			return { ...state, deletePopupShowed: false }
		case 'showLikesList':
			return { ...state, likesListShowed: true }
		case 'hideLikesList':
			return { ...state, likesListShowed: false }
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
		avatarPath,
		likesCount,
		commentsCount,
		isLiked,
		username,
		createdAt,
		isOpen,
		picPopupShowed,
		deletePopupShowed,
		captionInput,
		descriptionInput,
		likesListShowed,
	} = pictureState
	const { picId } = useParams<{ picId: string }>() as { picId: string }
	const navigate = useNavigate()
	const { auth } = useContext(AuthContext)
	const clickRef = useClickOutside(() => dispatch({ type: 'closePopup' }))

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
							avatarPath: SERVER_BASE_URL + data.avatar_path,
							likesCount: data.likes_count,
							commentsCount: data.comments_count,
							isLiked: data.is_liked,
							username: data.username,
							createdAt: data.created_at,
							isOpen: false,
							picPopupShowed: false,
							deletePopupShowed: false,
							captionInput: '',
							descriptionInput: '',
							likesListShowed: false,
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
				else {
					dispatch({ type: 'postComment', payload: [res.data] })
					window.location.reload()
				}
			}
		} catch (err: any) {
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
			alert('Please try again later!')
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

	function handleClickEdit() {
		dispatch({ type: 'showPicEditor' })
		document.body.style.overflow = 'hidden'
	}

	function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
		dispatch({
			type: 'change',
			field: 'descriptionInput',
			payload: e.target.value,
		})
	}

	function handleChangeCaption(e: React.ChangeEvent<HTMLTextAreaElement>) {
		dispatch({
			type: 'change',
			field: 'captionInput',
			payload: e.target.value,
		})
	}

	async function handleUpdatePicture(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		try {
			if (picId) {
				await updatePic(parseInt(picId), captionInput, descriptionInput)
				dispatch({ type: 'updateSucceed' })
				document.body.style.overflow = 'auto'
			}
		} catch (err: any) {
			alert('Error updating picture. Please try again later!')
		}
	}

	function handleCancel(props: 'delete' | 'update') {
		if (props === 'update') dispatch({ type: 'cancelUpdate' })
		if (props === 'delete') dispatch({ type: 'cancelDelete' })
		document.body.style.overflow = 'auto'
	}

	async function handleDelete() {
		try {
			const res = await deletePic(picId)
			navigate(HOME)
			console.log(res)
		} catch (err: any) {
			alert('Error deleting picture. Please try again later!')
			console.log(err)
		}
	}

	function handleClickDelete() {
		dispatch({ type: 'requestDelete' })
	}

	function showLikesList() {
		if (likesCount > 0) {
			dispatch({ type: 'showLikesList' })
			document.body.style.overflow = 'hidden'
		}
	}

	function hideLikesList() {
		dispatch({ type: 'hideLikesList' })
		document.body.style.overflow = 'auto'
	}

	return (
		<Container.Primary>
			<Post>
				<Post.Caption>{caption}</Post.Caption>
				<Post.InfoArea>
					<Post.AvatarArea>
						<Post.Avatar
							src={avatarPath}
							onClick={() => navigate(`/${username}`)}
						/>
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
							<MainPopup
								handleClickDelete={handleClickDelete}
								handleClickEdit={handleClickEdit}
							/>
						)}
					</div>
				</Post.InfoArea>
				<Post.Description>{description}</Post.Description>
				<Post.Picture src={imgPath} />

				<Post.Stats>
					<Post.Likes>
						{isLiked ? (
							<Icon.HeartFill onClick={handleUnlike}></Icon.HeartFill>
						) : (
							<Icon.Heart onClick={handleLike}></Icon.Heart>
						)}
						<Post.Count cursor onClick={showLikesList}>
							{likesCount}
						</Post.Count>
					</Post.Likes>
					<Post.Comments>
						<Icon.Comment></Icon.Comment>
						<Post.Count>{commentsCount}</Post.Count>
					</Post.Comments>
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

				{deletePopupShowed && (
					<DeletePopup
						handleCancel={handleCancel}
						handleDelete={handleDelete}
					/>
				)}

				{picPopupShowed && (
					<EditorPopup
						handleCancel={handleCancel}
						handleUpdatePicture={handleUpdatePicture}
						handleChangeCaption={handleChangeCaption}
						handleChangeDescription={handleChangeDescription}
						captionInput={captionInput}
						descriptionInput={descriptionInput}
						imgPath={imgPath}
					/>
				)}
				{likesListShowed && (
					<UserList hideList={hideLikesList} picId={picId} />
				)}
			</Post>
		</Container.Primary>
	)
}

export default Picture
