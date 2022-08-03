import React from 'react'
import { PrimaryContainer, ProfileCard } from '../components'
import { ProfileCardProps } from '../types/props'
const Profile: React.FC = () => {
	let data = {
		username: 'thucnhu',
		followers: 200,
		following: 200,
		posts: 10,
	} as ProfileCardProps
	return (
		<PrimaryContainer>
			<ProfileCard props={data} />
		</PrimaryContainer>
	)
}

export default Profile
