import { AuthData } from '../context/AuthContext'
import axios from './axios'

function postComment(picId: number, comment: string, auth: AuthData) {
	return axios.post(
		`/comments/`,
		{
			pic_id: picId,
			text: comment,
		},
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${auth?.access_token}`,
			},
		}
	)
}

export default postComment
