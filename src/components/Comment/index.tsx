import {
	AvatarArea,
	Avatar,
	AvatarRightArea,
	Username,
	CreatedAt,
	InfoArea,
} from '../../components/Post/post'
import { Icon } from '../../components'
import { Container, Text } from './comment'
import { CommentProps } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import { postCommentLike, deleteCommentLike } from '../../api/likes'

const Comment = ({ comment }: { comment: CommentProps }) => {
	const { isToggled, toggle } = useToggle(comment.is_liked)

	async function handleLike() {
		try {
			if (comment.id) {
				await postCommentLike(comment.id.toString())
				toggle()
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
				toggle()
			}
		} catch (err: any) {
			alert('Error occured. Please try again later!')
		}
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
				{isToggled ? (
					<Icon.HeartFill small onClick={handleUnlike}></Icon.HeartFill>
				) : (
					<Icon.Heart small onClick={handleLike}></Icon.Heart>
				)}
			</InfoArea>
			<Text>{comment.text}</Text>
		</Container>
	)
}

export default Comment
