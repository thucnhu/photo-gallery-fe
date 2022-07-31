import axios from './axios'
import { HOME } from '../constants/routes'

export default function getHomePic() {
	return axios.get(HOME)
}
