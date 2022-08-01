import axios from './axios'
import { AuthData } from '../context/AuthContext'

function postPicLike(picId: string, auth: AuthData) {
	return axios.post(
		`/pictures/${picId}/likes`,
		{},
		{
			headers: {
				Authorization: `Bearer ${auth?.access_token}`,
			},
		}
	)
}

function deletePicLike(picId: string, auth: AuthData) {
	return axios.delete(`/pictures/${picId}/likes`, {
		headers: {
			Authorization: `Bearer ${auth?.access_token}`,
		},
	})
}

function postCommentLike(commentId: string, auth: AuthData) {
	return axios.post(
		`/comments/${commentId}/likes`,
		{},
		{
			headers: {
				Authorization: `Bearer ${auth?.access_token}`,
			},
		}
	)
}

function deleteCommentLike(commentId: string, auth: AuthData) {
	return axios.delete(`/comments/${commentId}/likes`, {
		headers: {
			Authorization: `Bearer ${auth?.access_token}`,
		},
	})
}

export { postPicLike, deletePicLike, postCommentLike, deleteCommentLike }
