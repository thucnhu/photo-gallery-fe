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
import { CommentType } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import { postCommentLike, deleteCommentLike } from '../../api/likes'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const Comment = ({ comment }: { comment: CommentType }) => {
	const { isToggled, toggle } = useToggle()
	const { auth } = useContext(AuthContext)
	console.log(auth)

	async function handleLike() {
		try {
			if (comment.id) {
				const res = await postCommentLike(comment.id.toString(), auth)
				toggle()
				console.log(res)
			}
		} catch (err: any) {
			alert('Error occured. Please try again later!')
		}
	}

	async function handleUnlike() {
		try {
			if (comment.id) {
				const res = await deleteCommentLike(comment.id.toString(), auth)
				toggle()
				console.log(res)
			}
		} catch (err: any) {
			alert('Error occured. Please try again later!')
		}
	}

	return (
		<Container key={comment.id}>
			<InfoArea>
				<AvatarArea small>
					<Avatar src='https://i.pravatar.cc/300' />
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
