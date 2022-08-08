import {
	AvatarArea,
	Avatar,
	AvatarRightArea,
	Username,
	CreatedAt,
	InfoArea,
	Likes,
	Count,
} from '../../components/Post/post'
import AuthContext from '../../context/AuthContext'
import React, { useEffect, useContext, useReducer } from 'react'
import { Icon, UserList } from '../../components'
import { Container, Text, TextInput } from './comment'
import { CommentProps } from '../../types/props'
import { postCommentLike, deleteCommentLike } from '../../api/likes'
import { updateComment } from '../../api/comments'
import { SERVER_BASE_URL } from '../../constants/routes'
import { useNavigate } from 'react-router-dom'

const initialState = {
	text: '',
	isLiked: false,
	likesCount: 0,
	isEditable: false,
	likesListShowed: false,
}

type CommentState = typeof initialState

type CommentAction =
	| { type: 'editSucceed' | 'edit'; payload: string }
	| { type: 'like' | 'unlike' | 'showLikesList' }
	| { type: 'render'; payload: CommentState }

function commentReducer(state: CommentState, action: CommentAction) {
	switch (action.type) {
		case 'edit':
			return { ...state, isEditable: true, text: action.payload }
		case 'editSucceed':
			return { ...state, text: action.payload, isEditable: false }
		case 'like':
			return { ...state, isLiked: true, likesCount: state.likesCount + 1 }
		case 'unlike':
			return { ...state, isLiked: false, likesCount: state.likesCount - 1 }
		case 'render':
			return action.payload
		case 'showLikesList':
			return { ...state, likesListShowed: true }
		default:
			return state
	}
}

const Comment = ({ comment }: { comment: CommentProps }) => {
	const [state, dispatch] = useReducer(commentReducer, initialState)
	const { text, isLiked, likesCount, isEditable, likesListShowed } = state
	const { auth } = useContext(AuthContext)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch({
			type: 'render',
			payload: {
				text: comment.text,
				isLiked: comment.is_liked,
				likesCount: comment.likes_count,
				isEditable: false,
				likesListShowed: false,
			},
		})
	}, [comment])

	async function handleLike() {
		try {
			if (comment.id) {
				await postCommentLike(comment.id.toString())
				dispatch({ type: 'like' })
			}
		} catch (err: any) {
			if (err.response?.status === 401) {
				alert('Please log in to like this comment')
			} else {
				alert('Please try again later!')
			}
		}
	}

	async function handleUnlike() {
		try {
			if (comment.id) {
				await deleteCommentLike(comment.id.toString())
				dispatch({ type: 'unlike' })
			}
		} catch (err: any) {
			alert('Error occured. Please try again later!')
		}
	}

	function handleChangeComment(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: 'edit', payload: e.target.value })
	}

	async function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			dispatch({ type: 'editSucceed', payload: text })
			e.preventDefault()
			e.stopPropagation()

			if (text !== comment.text) {
				// only make API request if text has been changed
				const res = await updateComment(comment.id.toString(), text)
				console.log(res)
			}
		}
	}

	function handleDoubleClick() {
		if (auth?.username === comment.username) {
			dispatch({ type: 'edit', payload: text })
		}
	}

	function showLikesList() {
		if (comment.likes_count > 0) {
			dispatch({ type: 'showLikesList' })
			document.body.style.overflow = 'hidden'
		}
	}

	function hideLikesList() {
		dispatch({
			type: 'render',
			payload: { ...state, likesListShowed: false },
		})
		document.body.style.overflow = 'auto'
	}

	return (
		<Container key={comment.id}>
			<InfoArea>
				<AvatarArea small>
					<Avatar
						small
						src={SERVER_BASE_URL + comment.avatar_path}
						onClick={() => navigate(`/${comment.username}`)}
					/>
					<AvatarRightArea>
						<Username>{comment.username}</Username>
						<CreatedAt>{comment.created_at}</CreatedAt>
					</AvatarRightArea>
				</AvatarArea>
				<Likes>
					{isLiked ? (
						<Icon.HeartFill small onClick={handleUnlike}></Icon.HeartFill>
					) : (
						<Icon.Heart small onClick={handleLike}></Icon.Heart>
					)}
					<Count cursor onClick={showLikesList}>
						{likesCount}
					</Count>
				</Likes>
			</InfoArea>
			{isEditable ? (
				<TextInput
					value={text}
					onChange={handleChangeComment}
					onKeyPress={handleKeyPress}
				/>
			) : (
				<Text onDoubleClick={handleDoubleClick}>{text}</Text>
			)}
			{likesListShowed && (
				<UserList
					hideList={hideLikesList}
					commentId={comment.id.toString()}
				/>
			)}
		</Container>
	)
}

export default Comment
