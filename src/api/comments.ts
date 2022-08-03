import axios from './axios'

function postComment(picId: number, comment: string) {
	return axios.post('/comments/', {
		pic_id: picId,
		text: comment,
	})
}

export default postComment
