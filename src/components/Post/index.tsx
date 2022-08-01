import {
	CommentButton,
	Container,
	Avatar,
	AvatarArea,
	AvatarRightArea,
	Caption,
	Description,
	Username,
	CreatedAt,
	Picture,
	CommentForm,
	CommentInput,
} from './post'
import { RestPropsWithChildren } from '../../types/props'

const Post = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Post.CommentInput = ({ children, ...props }: RestPropsWithChildren) => {
	return <CommentInput {...props}>{children}</CommentInput>
}

Post.CommentForm = ({ children, ...props }: RestPropsWithChildren) => {
	return <CommentForm {...props}>{children}</CommentForm>
}

Post.Picture = ({ children, ...props }: RestPropsWithChildren) => {
	return <Picture {...props}>{children}</Picture>
}

Post.Avatar = ({ children, ...props }: RestPropsWithChildren) => {
	return <Avatar {...props}>{children}</Avatar>
}

Post.AvatarArea = ({ children, ...props }: RestPropsWithChildren) => {
	return <AvatarArea {...props}>{children}</AvatarArea>
}

Post.CommentButton = ({ children, ...props }: RestPropsWithChildren) => {
	return <CommentButton {...props}>{children}</CommentButton>
}

Post.AvatarRightArea = ({ children, ...props }: RestPropsWithChildren) => {
	return <AvatarRightArea {...props}>{children}</AvatarRightArea>
}

Post.Caption = ({ children, ...props }: RestPropsWithChildren) => {
	return <Caption {...props}>{children}</Caption>
}

Post.Description = ({ children, ...props }: RestPropsWithChildren) => {
	return <Description {...props}>{children}</Description>
}

Post.Username = ({ children, ...props }: RestPropsWithChildren) => {
	return <Username {...props}>{children}</Username>
}

Post.CreatedAt = ({ children, ...props }: RestPropsWithChildren) => {
	return <CreatedAt {...props}>{children}</CreatedAt>
}

export default Post
