import axios from './axios'

export function getPic(picId: number) {
	return axios.get(`/pictures/${picId}`)
}
