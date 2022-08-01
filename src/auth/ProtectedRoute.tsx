import { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOG_IN } from '../constants/routes'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = () => {
	const { auth, setAuth } = useContext(AuthContext)
	// console.log(auth)
	const location = useLocation()

	// useEffect(() => {
	// 	const auth = localStorage.getItem('auth')
	// 	if (auth) {
	// 		setAuth(JSON.parse(auth))
	// 	}
	// }, [])

	return auth !== null ? (
		<Outlet />
	) : (
		<Navigate to={LOG_IN} replace state={{ path: location.pathname }} />
	)
}

export default ProtectedRoute
