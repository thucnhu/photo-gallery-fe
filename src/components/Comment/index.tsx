import React from 'react'
import {
	AvatarArea,
	Avatar,
	AvatarRightArea,
	Username,
	CreatedAt,
	InfoArea,
} from '../../components/Post/post'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { Container, Text } from './comment'
import { CommentType } from '../../types/props'

const Comment = (props: { comment: CommentType }) => {
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
				<BsSuitHeart />
			</InfoArea>
			<Text>{props.comment.text}</Text>
		</Container>
	)
}

export default Comment
