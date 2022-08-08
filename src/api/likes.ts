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

function getPicLikesList(picId: string) {
	return axios.get(`/pictures/${picId}/likes`)
}

function getCmtLikesList(commentId: string) {
	return axios.get(`/comments/${commentId}/likes`)
}

export {
	postPicLike,
	deletePicLike,
	postCommentLike,
	deleteCommentLike,
	getPicLikesList,
	getCmtLikesList,
}
