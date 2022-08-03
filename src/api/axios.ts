import axios from 'axios'

let token: string | null = null
if (localStorage.getItem('auth')) {
	token = JSON.parse(localStorage.getItem('auth')!).access_token
}

export default axios.create({
	baseURL: 'http://localhost:8080',
	headers: {
		Authorization: `Bearer ${token}`,
	},
})
