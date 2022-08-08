import { useState } from 'react'
import { Button } from '../../'
import { followUser } from '../../../api/users'

type Props = {
	is_followed: boolean
	username: string
}

const FollowButton = ({ is_followed, username }: Props) => {
	const [isFollowed, setIsFollowed] = useState<boolean>(is_followed)

	async function handleFollowUser(username: string) {
		try {
			await followUser(username)
			setIsFollowed(true)
		} catch (err: any) {
			if (err.response?.status === 401) {
				alert('Please login to follow this user')
			} else {
				alert('Please try again later!')
			}
		}
	}

	return (
		<>
			{!isFollowed ? (
				<Button color='green' onClick={() => handleFollowUser(username)}>
					Follow
				</Button>
			) : (
				<Button color='gray'>Message</Button>
			)}
		</>
	)
}

export default FollowButton
