import axios from './axios'
import { SIGN_UP } from '../constants/routes'

export default function signup(username: string, password: string) {
	return axios.post(
		SIGN_UP,
		{ username, password },
		{
			headers: { 'Content-Type': 'application/json' },
		}
	)
}
