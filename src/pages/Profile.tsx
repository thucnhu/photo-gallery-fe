import React, { useEffect, useState } from 'react'
import { Grid, PrimaryContainer, ProfileCard } from '../components'
import { ProfileCardProps } from '../types/props'
import { getProfile } from '../api/users'

const Profile: React.FC = () => {
	const [profile, setProfile] = useState<ProfileCardProps>()
	const username = window.location.pathname.split('/')[1]

	useEffect(() => {
		getProfile(username)
			.then(res => {
				setProfile(res.data)
				console.log(res.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			{profile && (
				<PrimaryContainer>
					<ProfileCard props={profile} />
					<Grid pictures={profile.pictures} />
				</PrimaryContainer>
			)}
		</>
	)
}

export default Profile
