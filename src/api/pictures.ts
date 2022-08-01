import axios from './axios'
import { HOME } from '../constants/routes'

function getPic(picId: number) {
	return axios.get(`/pictures/${picId}`)
}

function getHomePic() {
	return axios.get(HOME)
}

export { getHomePic, getPic }
