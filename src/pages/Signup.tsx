import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { CenterContainer, Form } from '../components'
import { SIGN_UP, HOME, LOG_IN } from '../constants/routes'

const Signup: React.FC = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errMsg, setErrMsg] = useState<string>('')

	const navigate = useNavigate()

	async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault()

		try {
			await axios.post(
				SIGN_UP,
				{ username, password },
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
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
			{errMsg && (
				<Form.ErrBox>
					<Form.Message>{errMsg}</Form.Message>
				</Form.ErrBox>
			)}
			<Form onSubmit={handleSubmit}>
				<Form.Input
					placeholder='Username'
					name='username'
					value={username}
					type='text'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
					required
				/>
				<Form.Input
					placeholder='Password'
					name='password'
					value={password}
					type='password'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
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
