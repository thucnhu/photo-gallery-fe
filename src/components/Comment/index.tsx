import {
	AvatarArea,
	Avatar,
	AvatarRightArea,
	Username,
	CreatedAt,
	InfoArea,
	Stats,
} from '../../components/Post/post'
import { useEffect, useReducer } from 'react'
import { Icon } from '../../components'
import { Container, Text } from './comment'
import { CommentProps } from '../../types/props'
import { postCommentLike, deleteCommentLike } from '../../api/likes'

const initialState = {
	text: '',
	isLiked: false,
	likesCount: 0,
}

type CommentState = typeof initialState

type CommentAction =
	| { type: 'change'; payload: string }
	| { type: 'like' }
	| { type: 'unlike' }
	| { type: 'render'; payload: CommentState }

function commentReducer(state: CommentState, action: CommentAction) {
	switch (action.type) {
		case 'change':
			return { ...state, text: action.payload }
		case 'like':
			return { ...state, isLiked: true, likesCount: state.likesCount + 1 }
		case 'unlike':
			return { ...state, isLiked: false, likesCount: state.likesCount - 1 }
		case 'render':
			return action.payload
		default:
			return state
	}
}

const Comment = ({ comment }: { comment: CommentProps }) => {
	const [state, dispatch] = useReducer(commentReducer, initialState)
	const { text, isLiked, likesCount } = state

	useEffect(() => {
		dispatch({
			type: 'render',
			payload: {
				text: comment.text,
				isLiked: comment.is_liked,
				likesCount: comment.likes_count,
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

	function handleUpdateComment() {
		console.log('update comment')
	}

	return (
		<Container key={comment.id}>
			<InfoArea>
				<AvatarArea small>
					<Avatar src='https://i.pravatar.cc/301' />
					<AvatarRightArea>
						<Username>{comment.username}</Username>
						<CreatedAt>{comment.created_at}</CreatedAt>
					</AvatarRightArea>
				</AvatarArea>
				<Stats>
					{isLiked ? (
						<Icon.HeartFill small onClick={handleUnlike}></Icon.HeartFill>
					) : (
						<Icon.Heart small onClick={handleLike}></Icon.Heart>
					)}
					{likesCount}
				</Stats>
			</InfoArea>
			<Text>{text}</Text>
		</Container>
	)
}

export default Comment
