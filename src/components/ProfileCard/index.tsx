import {
	Stats,
	Posts,
	Followers,
	Following,
	Container,
	Avatar,
	Info,
	Username,
} from './profileCard'
import { RestPropsWithChildren } from '../../types/props'

const ProfileCard = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

ProfileCard.Posts = ({ children, ...props }: RestPropsWithChildren) => {
	return <Posts {...props}>{children}</Posts>
}

ProfileCard.Followers = ({ children, ...props }: RestPropsWithChildren) => {
	return <Followers {...props}>{children}</Followers>
}

ProfileCard.Following = ({ children, ...props }: RestPropsWithChildren) => {
	return <Following {...props}>{children}</Following>
}

ProfileCard.Info = ({ children, ...props }: RestPropsWithChildren) => {
	return <Info {...props}>{children}</Info>
}

ProfileCard.Username = ({ children, ...props }: RestPropsWithChildren) => {
	return <Username {...props}>{children}</Username>
}

ProfileCard.Stats = ({ children, ...props }: RestPropsWithChildren) => {
	return <Stats {...props}>{children}</Stats>
}

ProfileCard.Avatar = ({ ...props }: RestPropsWithChildren) => {
	return <Avatar {...props} />
}

export default ProfileCard
