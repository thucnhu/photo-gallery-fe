import axios from './axios'

function getProfile(username: string) {
	return axios.get(`/${username}`)
}

function followUser(username: string) {
	return axios.post(`/${username}/follow`)
}

function unfollowUser(username: string) {
	return axios.delete(`/${username}/follow`)
}

export { getProfile, followUser, unfollowUser }
