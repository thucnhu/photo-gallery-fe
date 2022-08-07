import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Button, ProfileForm, Container, Alert } from '../components'
import { useNavigate } from 'react-router-dom'
import { updatePassword } from '../api/users'

const Password: React.FC = () => {
	const [currPassword, setCurrPassword] = useState<string>('')
	const [newPassword, setNewPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [error, setError] = useState<string | null>(null)

	const { auth } = useContext(AuthContext)
	const navigate = useNavigate()

	function handleCurrPassword(e: React.ChangeEvent<HTMLInputElement>) {
		setCurrPassword(e.target.value)
	}

	function handleNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
		setNewPassword(e.target.value)
	}

	function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
		setConfirmPassword(e.target.value)
	}

	async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		if (newPassword !== confirmPassword) {
			setError('Passwords do not match')
			return
		}
		try {
			await updatePassword({
				curr_password: currPassword,
				new_password: newPassword,
			})
			navigate(`${auth?.username}`)
		} catch (err: any) {
			if (err.response.status === 401) {
				setError('Current password is incorrect')
			} else {
				setError('An error occurred. Please try again later!')
			}
		}
	}

	const handleCancel = () => navigate(`/${auth?.username}`)

	return (
		<Container.Primary>
			<ProfileForm onSubmit={handleSubmit}>
				<ProfileForm.RowItem>
					<ProfileForm.AvatarLabel>
						<ProfileForm.Avatar src={auth?.avatar_path} />
					</ProfileForm.AvatarLabel>
					<ProfileForm.Username>{auth?.username}</ProfileForm.Username>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label>Current password</ProfileForm.Label>
					<ProfileForm.Input
						type='password'
						value={currPassword}
						name='currPassword'
						onChange={handleCurrPassword}
						required
					/>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label>New password</ProfileForm.Label>
					<ProfileForm.Input
						type='password'
						value={newPassword}
						name='newPassword'
						onChange={handleNewPassword}
						required
					/>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label>Confirm password</ProfileForm.Label>
					<ProfileForm.Input
						type='password'
						value={confirmPassword}
						name='confirmPassword'
						onChange={handleConfirmPassword}
						required
					/>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label></ProfileForm.Label>
					<ProfileForm.ButtonArea>
						<Button type='submit'>Submit</Button>
						<Button type='reset' color='red' onClick={handleCancel}>
							Cancel
						</Button>
					</ProfileForm.ButtonArea>
				</ProfileForm.RowItem>
				<ProfileForm.RowItem>
					<ProfileForm.Label></ProfileForm.Label>
					<ProfileForm.ButtonArea>
						<ProfileForm.LinkItem to='#'>
							Forgot password?
						</ProfileForm.LinkItem>
					</ProfileForm.ButtonArea>
				</ProfileForm.RowItem>
				{error && (
					<ProfileForm.RowItem>
						<ProfileForm.Label></ProfileForm.Label>
						<ProfileForm.ButtonArea>
							<Alert type='warning'>{error}</Alert>
						</ProfileForm.ButtonArea>
					</ProfileForm.RowItem>
				)}
			</ProfileForm>
		</Container.Primary>
	)
}

export default Password
