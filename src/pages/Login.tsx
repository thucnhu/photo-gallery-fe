import React, { useReducer, useContext } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { Container, Form } from '../components'
import { HOME, SIGN_UP } from '../constants/routes'
import { login } from '../api/auth'

const initialState = {
	username: '',
	password: '',
	isLoading: false,
	error: '',
}

type LoginState = typeof initialState

type LoginAction =
	| { type: 'login' | 'success' }
	| { type: 'error'; payload: string }
	| { type: 'change'; field: string; payload: string }

function loginReducer(state: LoginState, action: LoginAction) {
	switch (action.type) {
		case 'login':
			return { ...state, isLoading: true, error: '' }
		case 'success':
			return { ...state, isLoading: false }
		case 'error':
			return { ...state, isLoading: false, error: action.payload }
		case 'change':
			return { ...state, [action.field]: action.payload }
		default:
			return state
	}
}

const Login: React.FC = () => {
	const [loginState, dispatch] = useReducer(loginReducer, initialState)
	const { username, password, isLoading, error } = loginState

	const { setAuth } = useContext(AuthContext)
	const { state } = useLocation() as { state: { path: string } }
	const navigate = useNavigate()

	function handleChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: 'change', field: 'username', payload: e.target.value })
	}

	function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: 'change', field: 'password', payload: e.target.value })
	}

	async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		dispatch({ type: 'login' })

		try {
			const res = await login(username, password)
			localStorage.setItem(
				'auth',
				JSON.stringify({
					access_token: res.data.access_token,
					username: res.data.user.username,
					id: res.data.user.id,
				})
			)
			setAuth({
				accessToken: res.data.access_token,
				username: res.data.user.username,
				id: res.data.user.id,
			})
			dispatch({ type: 'success' })
			navigate(state?.path || HOME)
			window.location.reload()
		} catch (err: any) {
			if (err.response?.status === 401 || err.response?.status === 404) {
				dispatch({ type: 'error', payload: 'Invalid username or password' })
			} else {
				dispatch({ type: 'error', payload: 'Something went wrong' })
			}
		}
	}

	return (
		<Container.Center>
			{error && <Form.ErrBox>{error}</Form.ErrBox>}
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
				<Form.Button type='submit' disabled={isLoading}>
					Log in
				</Form.Button>
				<Form.CTA>
					Not a member yet? Sign up <Link to={SIGN_UP}>here</Link>
				</Form.CTA>
			</Form>
		</Container.Center>
	)
}

export default Login
