import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Container, ProfileCard } from '../components'
import { ProfileCardProps } from '../types/props'
import { getProfile } from '../api/users'

const Profile: React.FC = () => {
	const [profile, setProfile] = useState<ProfileCardProps>()
	const username = window.location.pathname.split('/')[1]
	const navigate = useNavigate()

	useEffect(() => {
		getProfile(username)
			.then(res => setProfile(res.data))
			.catch(err => {
				if (err.response.status === 404) navigate('*')
			})
	}, [username, navigate])

	return (
		<>
			{profile && (
				<Container.Primary>
					<ProfileCard props={profile} />
					<Grid pictures={profile.pictures} />
				</Container.Primary>
			)}
		</>
	)
}

export default Profile
