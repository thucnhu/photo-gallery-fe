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

export { getHomePic, getPic, postPic }
