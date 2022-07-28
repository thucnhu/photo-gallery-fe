import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import axios from '../../api/axios'
import { Form } from '../../components'
import { CenterContainer } from '../../components'
import { HOME, LOG_IN } from '../../constants/routes'

const Login: React.FC = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errMsg, setErrMsg] = useState<string>('')

	const { setAuth } = useContext(AuthContext)

	const navigate = useNavigate()

	async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()

		try {
			const res = await axios.post(
				LOG_IN,
				{ username, password },
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
			setAuth({
				access_token: res.data.access_token,
				username: res.data.user.username,
				id: res.data.user.id,
			})
			navigate(HOME)
		} catch (err: any) {
			if (!err?.response) {
				setErrMsg('Network Error')
			} else if (
				err.response?.status === 401 ||
				err.response?.status === 404
			) {
				setErrMsg('Username or password is incorrect!')
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
			</Form>
		</CenterContainer>
	)
}

export default Login
