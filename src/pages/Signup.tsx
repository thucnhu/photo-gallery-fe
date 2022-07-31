import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import signup from '../api/signup'
import { CenterContainer, Form } from '../components'
import { HOME, LOG_IN } from '../constants/routes'

const Signup: React.FC = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errMsg, setErrMsg] = useState<string>('')

	const navigate = useNavigate()

	function handleChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value)
	}

	function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		try {
			await signup(username, password)
			navigate(HOME)
		} catch (err: any) {
			if (!err?.response) {
				setErrMsg('Network Error')
			} else if (err.response?.status === 400) {
				setErrMsg('Password must be at least 8 characters long!')
			} else if (err.response?.status === 409) {
				setErrMsg('Username already exists!')
			} else {
				setErrMsg('Please try again later!')
			}
		}
	}

	return (
		<CenterContainer>
			{errMsg && <Form.ErrBox>{errMsg}</Form.ErrBox>}
			<Form onSubmit={handleSubmit}>
				<Form.Input
					placeholder='Username'
					name='username'
					value={username}
					type='text'
					onChange={handleChangeUsername}
					required
				/>
				<Form.Input
					placeholder='Password'
					name='password'
					value={password}
					type='password'
					onChange={handleChangePassword}
					required
				/>
				<Form.Button type='submit'>Register</Form.Button>
				<Form.CTA>
					Already a member? Log in <Link to={LOG_IN}>here</Link>
				</Form.CTA>
			</Form>
		</CenterContainer>
	)
}

export default Signup
