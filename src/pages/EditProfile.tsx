import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { Container, ProfileForm, Button } from '../components'
import { updateProfile } from '../api/users'
import { PASSWORD, SERVER_BASE_URL } from '../constants/routes'

const EditProfile: React.FC = () => {
	const { auth, setAuth } = useContext(AuthContext)
	const [username, setUsername] = React.useState(auth?.username)
	const [uploadedAvatar, setUploadedAvatar] = React.useState<File | null>()
	const navigate = useNavigate()

	async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		if (auth) {
			try {
				if (uploadedAvatar) {
					const res = await updateProfile({
						username: e.target.username.value,
						avatar_file: uploadedAvatar,
					})
					localStorage.setItem(
						'auth',
						JSON.stringify({
							access_token: auth.access_token,
							username: res.data.username,
							avatar_path: SERVER_BASE_URL + res.data.avatar_path,
							id: auth.id,
						})
					)
					setAuth({
						...auth,
						username: res.data.username,
						avatar_path: SERVER_BASE_URL + res.data.avatar_path,
					})
				} else {
					const res = await updateProfile({
						username: e.target.username.value,
					})
					localStorage.setItem(
						'auth',
						JSON.stringify({
							access_token: auth.access_token,
							username: res.data.username,
							avatar_path: auth?.avatar_path,
							id: auth.id,
						})
					)
					setAuth({
						...auth,
						username: res.data.username,
					})
				}
				navigate(`/${e.target.username.value}`)
			} catch (err: any) {
				alert('Username alreay exists')
			}
		}
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value)
	}

	function handleUploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		if (e.target.files) setUploadedAvatar(e.target.files[0])
	}

	const handleCancel = () => navigate(`/${auth?.username}`)

	return (
		<Container.Primary>
			<ProfileForm onSubmit={handleSubmit}>
				<ProfileForm.RowItem>
					<ProfileForm.AvatarLabel
						htmlFor='upload-avatar'
						avatarPath={
							uploadedAvatar
								? URL.createObjectURL(uploadedAvatar)
								: auth?.avatar_path
						}
					>
						<ProfileForm.AvatarInput
							id='upload-avatar'
							type='file'
							onChange={handleUploadAvatar}
							accept='image/*'
						/>
					</ProfileForm.AvatarLabel>
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
						<Button color='red' type='reset' onClick={handleCancel}>
							Cancel
						</Button>
					</ProfileForm.ButtonArea>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label></ProfileForm.Label>
					<ProfileForm.ButtonArea>
						<ProfileForm.LinkItem to={PASSWORD}>
							Change password
						</ProfileForm.LinkItem>
					</ProfileForm.ButtonArea>
				</ProfileForm.RowItem>
			</ProfileForm>
		</Container.Primary>
	)
}

export default EditProfile
