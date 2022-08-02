import axios from './axios'
import { HOME } from '../constants/routes'

function getPic(picId: number, token: string) {
	return axios.get(`/pictures/${picId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

function getHomePic() {
	return axios.get(HOME)
}

export { getHomePic, getPic }
