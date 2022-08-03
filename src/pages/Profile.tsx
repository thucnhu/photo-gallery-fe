import React from 'react'
import { PrimaryContainer, ProfileCard, Button } from '../components'

const Profile: React.FC = () => {
	return (
		<PrimaryContainer>
			<ProfileCard>
				<ProfileCard.Avatar src='https://i.pravatar.cc/300' />
				<ProfileCard.Info>
					<ProfileCard.Username>thucnhu</ProfileCard.Username>
					<ProfileCard.Stats>
						<ProfileCard.Posts>10 posts</ProfileCard.Posts>
						<ProfileCard.Followers>200 followers</ProfileCard.Followers>
						<ProfileCard.Following>200 following</ProfileCard.Following>
					</ProfileCard.Stats>
					<Button color='green'>Follow</Button>
				</ProfileCard.Info>
			</ProfileCard>
		</PrimaryContainer>
	)
}

export default Profile
