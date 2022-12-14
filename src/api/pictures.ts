import axios from './axios'
import { HOME, UPLOAD } from '../constants/routes'

function getPic(picId: number) {
	return axios.get(`/pictures/${picId}`)
}

function getHomePic() {
	return axios.get(HOME)
}

function postPic(uploadedImg: File, caption: string, description: string) {
	return axios.post(
		UPLOAD,
		{
			img_file: uploadedImg,
			caption: caption,
			description: description,
		},
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}
	)
}

function updatePic(picId: number, caption: string, description: string) {
	return axios.patch(
		`/pictures/${picId}`,
		{
			caption: caption,
			description: description,
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
}

function deletePic(picId: string) {
	return axios.delete(`/pictures/${picId}`)
}

function getPicByTopic(topic: string, page: string) {
	return axios.get(`/search?topic=${topic}&page=${page}`)
}

export { getHomePic, getPic, postPic, updatePic, getPicByTopic, deletePic }
