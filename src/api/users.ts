import axios from './axios'

function getProfile(username: string) {
	return axios.get(`/${username}`)
}

function followUser(username: string) {
	return axios.post(`/follow/${username}`)
}

function unfollowUser(username: string) {
	return axios.delete(`/unfollow/${username}`)
}

export { getProfile, followUser, unfollowUser }
