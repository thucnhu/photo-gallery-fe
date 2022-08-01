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

const Comment = (props: { comment: CommentType }) => {
	const { isToggled, toggle } = useToggle()

	return (
		<Container key={props.comment.id}>
			<InfoArea>
				<AvatarArea small>
					<Avatar src='https://i.pravatar.cc/300' />
					<AvatarRightArea>
						<Username>{props.comment.username}</Username>
						<CreatedAt>{props.comment.created_at}</CreatedAt>
					</AvatarRightArea>
				</AvatarArea>
				{isToggled ? (
					<Icon.HeartFill small onClick={toggle}></Icon.HeartFill>
				) : (
					<Icon.Heart small onClick={toggle}></Icon.Heart>
				)}
			</InfoArea>
			<Text>{props.comment.text}</Text>
		</Container>
	)
}

export default Comment
