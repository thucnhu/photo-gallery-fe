import axios from './axios'

function postComment(picId: number, comment: string) {
	return axios.post('/comments/', {
		pic_id: picId,
		text: comment,
	})
}

function updateComment(commentId: string, comment: string) {
	return axios.patch(`/comments/${commentId}`, {
		text: comment,
	})
}

export { postComment, updateComment }
