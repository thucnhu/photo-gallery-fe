import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Picture, Signup, Login, Upload, Error } from './pages'
import {
	HOME,
	UPLOAD,
	SIGN_UP,
	LOG_IN,
	ERROR,
	PICTURE,
} from './constants/routes'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={PICTURE} element={<Picture />} />
				<Route path={UPLOAD} element={<Upload />} />
				<Route path={LOG_IN} element={<Login />} />
				<Route path={SIGN_UP} element={<Signup />} />
				<Route path={ERROR} element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
