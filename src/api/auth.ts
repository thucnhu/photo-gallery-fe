import axios from './axios'
import { LOG_IN, SIGN_UP } from '../constants/routes'

function signup(username: string, password: string) {
	return axios.post(
		SIGN_UP,
		{ username, password },
		{
			headers: { 'Content-Type': 'application/json' },
		}
	)
}

function login(username: string, password: string) {
	return axios.post(
		LOG_IN,
		{ username, password },
		{
			headers: { 'Content-Type': 'application/json' },
		}
	)
}

export { signup, login }
