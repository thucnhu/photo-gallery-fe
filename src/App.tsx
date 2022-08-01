import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header, Body, AppRoutes } from './components'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Body>
				<AppRoutes />
			</Body>
		</BrowserRouter>
	)
}

export default App
