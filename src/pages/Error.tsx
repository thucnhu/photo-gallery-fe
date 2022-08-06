import React from 'react'
import { Container, ErrorMessage } from '../components'

const Error: React.FC = () => {
	return (
		<Container.Center>
			<ErrorMessage>404 Not found</ErrorMessage>
		</Container.Center>
	)
}

export default Error
