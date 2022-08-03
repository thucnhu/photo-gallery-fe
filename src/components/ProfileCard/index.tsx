import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
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
import { Button } from '../'
import { ProfileCardProps } from '../../types/props'

const ProfileCard = ({ props }: { props: ProfileCardProps }) => {
	const { auth } = useContext(AuthContext)

	return (
		<Container>
			<Avatar src='https://i.pravatar.cc/300' />
			<Info>
				<Username>{props.username}</Username>
				<Stats>
					<Posts>{props.posts} posts</Posts>
					<Followers>{props.followers} followers</Followers>
					<Following>{props.following} following</Following>
				</Stats>
				<Button color={props.isSubscribed ? 'gray' : 'green'}>
					{auth?.username === props.username
						? 'Edit Profile'
						: props.isSubscribed
						? 'Unfollow'
						: 'Follow'}
				</Button>
			</Info>
		</Container>
	)
}

export default ProfileCard
