import axios from './axios'
import { TOPICS } from '../constants/routes'

function getTopics() {
	return axios.get(TOPICS)
}

export { getTopics }
