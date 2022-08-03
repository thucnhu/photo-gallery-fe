import axios from './axios'

function postPicLike(picId: string) {
	return axios.post(`/pictures/${picId}/likes`)
}

function deletePicLike(picId: string) {
	return axios.delete(`/pictures/${picId}/likes`)
}

function postCommentLike(commentId: string) {
	return axios.post(`/comments/${commentId}/likes`)
}

function deleteCommentLike(commentId: string) {
	return axios.delete(`/comments/${commentId}/likes`)
}

export { postPicLike, deletePicLike, postCommentLike, deleteCommentLike }
