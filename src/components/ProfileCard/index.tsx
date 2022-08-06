import { useContext, useState } from 'react'
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
import { EDIT_PROFILE, SERVER_BASE_URL } from '../../constants/routes'

const ProfileCard = ({ props }: { props: ProfileCardProps }) => {
	const [isFollowed, setIsFollowed] = useState<boolean | undefined>(
		props.is_followed
	)
	const { auth } = useContext(AuthContext)
	const navigate = useNavigate()

	async function handleClickButton() {
		switch (isFollowed) {
			case true:
				const res = await unfollowUser(props.username)
				setIsFollowed(false)
				console.log(res)
				break

			default:
				if (auth?.username === props.username) {
					navigate(EDIT_PROFILE)
				} else {
					const res = await followUser(props.username)
					setIsFollowed(true)
					console.log(res)
				}
				break
		}
	}

	return (
		<Container>
			<Avatar src={SERVER_BASE_URL + props.avatar_path} />
			<Info>
				<Username>{props.username}</Username>
				<Stats>
					<Posts>{props.posts} posts</Posts>
					<Followers>{props.followers} followers</Followers>
					<Following>{props.following} following</Following>
				</Stats>
				{auth && (
					<Button
						color={isFollowed ? 'gray' : 'green'}
						onClick={handleClickButton}
					>
						{auth.username === props.username
							? 'Edit Profile'
							: isFollowed
							? 'Unfollow'
							: 'Follow'}
					</Button>
				)}
			</Info>
		</Container>
	)
}

export default ProfileCard
