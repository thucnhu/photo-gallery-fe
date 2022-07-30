import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOG_IN } from '../constants/routes'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = () => {
	const { auth } = useContext(AuthContext)
	const location = useLocation()

	return auth !== undefined ? (
		<Outlet />
	) : (
		<Navigate to={LOG_IN} replace state={{ path: location.pathname }} />
	)
}

export default ProtectedRoute
