import axios from './axios'
import { EDIT_PROFILE } from '../constants/routes'

type UpdateProfile = {
	username: string
	avatar_path: string
}

function getProfile(username: string) {
	return axios.get(`/${username}`)
}

function followUser(username: string) {
	return axios.post(`/follow/${username}`)
}

function unfollowUser(username: string) {
	return axios.delete(`/unfollow/${username}`)
}

function updateProfile(data: UpdateProfile) {
	return axios.patch(EDIT_PROFILE, data)
}

export { getProfile, followUser, unfollowUser, updateProfile }
