import React, { useContext, useState, useEffect } from 'react'
import { Home, Picture, Signup, Login, Upload, Error } from '../../pages'
import { HOME, UPLOAD, SIGN_UP, LOG_IN, PICTURE } from '../../constants/routes'
import { Route, Routes } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import ProtectedRoute from '../../auth/ProtectedRoute'

const AppRoutes: React.FC = () => {
	const { setAuth } = useContext(AuthContext)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		let currAuth = localStorage.getItem('auth')
		if (currAuth) {
			setAuth(JSON.parse(currAuth))
			setIsLoaded(true)
		}
	}, [])

	return (
		<>
			{isLoaded && (
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route path={UPLOAD} element={<Upload />} />
					</Route>
					<Route path={HOME} element={<Home />} />
					<Route path={PICTURE} element={<Picture />} />
					<Route path={LOG_IN} element={<Login />} />
					<Route path={SIGN_UP} element={<Signup />} />
					<Route path='*' element={<Error />} />
				</Routes>
			)}
		</>
	)
}

export default AppRoutes
