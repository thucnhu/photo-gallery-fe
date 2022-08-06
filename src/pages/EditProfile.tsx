import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Container, ProfileForm, Button } from '../components'
import { updateProfile } from '../api/users'

const EditProfile: React.FC = () => {
	const { auth } = useContext(AuthContext)
	const [username, setUsername] = React.useState(auth?.username)

	// async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
	// 	e.preventDefault()
	// 	if (auth) {
	// 		try {
	// 			const res = await updateProfile({
	// 				username: e.target.username.value,
	// 				avatar_path: auth?.avatarPath,
	// 			})
	// 			console.log(res)
	// 		} catch (err: any) {
	// 			console.log(err)
	// 		}
	// 	}
	// }
	console.log(auth)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value)
	}

	function handleUploadAvatar() {}

	return (
		<Container.Primary>
			<ProfileForm onSubmit={() => console.log('submit')}>
				<ProfileForm.RowItem>
					<ProfileForm.Label>
						<ProfileForm.AvatarLabel
							htmlFor='upload-avatar'
							// imgPath='https://i.pravatar.cc/300'
						>
							<ProfileForm.AvatarInput
								id='upload-avatar'
								type='file'
								onChange={handleUploadAvatar}
								accept='image/*'
							/>
						</ProfileForm.AvatarLabel>
					</ProfileForm.Label>
					<ProfileForm.Username>{auth?.username}</ProfileForm.Username>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label>Username</ProfileForm.Label>
					<ProfileForm.Input
						value={username}
						onChange={handleChange}
						type='text'
						name='username'
						required
					/>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label>Email</ProfileForm.Label>
					<ProfileForm.Input placeholder='username@gmail.com' disabled />
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label>Phone number</ProfileForm.Label>
					<ProfileForm.Input placeholder='0901952614' disabled />
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label></ProfileForm.Label>
					<ProfileForm.ButtonArea>
						<Button type='submit'>Submit</Button>
						<Button color='red'>Cancel</Button>
					</ProfileForm.ButtonArea>
				</ProfileForm.RowItem>
			</ProfileForm>
		</Container.Primary>
	)
}

export default EditProfile
