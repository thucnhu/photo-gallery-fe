import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { unfollowUser, followUser } from '../../api/users'
import { EDIT_PROFILE } from '../../constants/routes'

const ProfileCard = ({ props }: { props: ProfileCardProps }) => {
	const { auth } = useContext(AuthContext)
	const navigate = useNavigate()

	async function handleClickButton() {
		switch (props.isFollowed) {
			case true:
				const res = await unfollowUser(props.username)
				console.log(res)
				break

			default:
				if (auth?.username === props.username) {
					navigate(EDIT_PROFILE)
				} else {
					const res = await followUser(props.username)
					console.log(res)
				}
				break
		}
	}

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
				{auth && (
					<Button
						color={props.isFollowed ? 'gray' : 'green'}
						onClick={handleClickButton}
					>
						{auth.username === props.username
							? 'Edit Profile'
							: props.isFollowed
							? 'Unfollow'
							: 'Follow'}
					</Button>
				)}
			</Info>
		</Container>
	)
}

export default ProfileCard
