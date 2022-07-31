import { LOG_IN } from '../constants/routes'
import axios from './axios'

export default function login(username: string, password: string) {
	return axios.post(
		LOG_IN,
		{ username, password },
		{
			headers: { 'Content-Type': 'application/json' },
		}
	)
}
