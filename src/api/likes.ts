import axios from './axios'

function postPicLike(picId: string, token: string) {
	return axios.post(
		`/pictures/${picId}/likes`,
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}

function deletePicLike(picId: string, token: string) {
	return axios.delete(`/pictures/${picId}/likes`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

function postCommentLike(commentId: string, token: string) {
	return axios.post(
		`/comments/${commentId}/likes`,
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}

function deleteCommentLike(commentId: string, token: string) {
	return axios.delete(`/comments/${commentId}/likes`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

export { postPicLike, deletePicLike, postCommentLike, deleteCommentLike }
