import axios from './axios'

function getProfile(username: string) {
	return axios.get(`/${username}`)
}

export { getProfile }
