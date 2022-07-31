import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Picture, Signup, Login, Upload, Error } from './pages'
import { HOME, UPLOAD, SIGN_UP, LOG_IN, PICTURE } from './constants/routes'
import { Header, Body } from './components'
import ProtectedRoute from './auth/ProtectedRoute'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Body>
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route path={UPLOAD} element={<Upload />} />
						<Route path={PICTURE} element={<Picture />} />
					</Route>
					<Route path={HOME} element={<Home />} />
					<Route path={LOG_IN} element={<Login />} />
					<Route path={SIGN_UP} element={<Signup />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Body>
		</BrowserRouter>
	)
}

export default App
