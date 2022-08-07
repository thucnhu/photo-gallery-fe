import axios from './axios'
import { EDIT_PROFILE } from '../constants/routes'

function getProfile(username: string) {
	return axios.get(`/${username}`)
}

function followUser(username: string) {
	return axios.post(`/follow/${username}`)
}

function unfollowUser(username: string) {
	return axios.delete(`/unfollow/${username}`)
}

function updateProfile(data: { username: string; avatar_file?: File }) {
	return axios.patch(EDIT_PROFILE, data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	})
}

export { getProfile, followUser, unfollowUser, updateProfile }
