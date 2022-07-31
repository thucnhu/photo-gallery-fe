import React, { useState, useContext } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { CenterContainer, Form } from '../components'
import { HOME, SIGN_UP } from '../constants/routes'
import login from '../api/login'

const Login: React.FC = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errMsg, setErrMsg] = useState<string>('')

	const { setAuth } = useContext(AuthContext)

	const { state } = useLocation() as { state: { path: string } }
	const navigate = useNavigate()

	async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		try {
			const res = await login(username, password)
			setAuth({
				access_token: res.data.access_token,
				username: res.data.user.username,
				id: res.data.user.id,
			})
			navigate(state?.path || HOME)
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
			{errMsg && <Form.ErrBox>{errMsg}</Form.ErrBox>}
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
				<Form.Button type='submit'>Log in</Form.Button>
				<Form.CTA>
					Not a member yet? Sign up <Link to={SIGN_UP}>here</Link>
				</Form.CTA>
			</Form>
		</CenterContainer>
	)
}

export default Login
