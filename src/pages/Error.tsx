import React from 'react'
import { CenterContainer, ErrorMessage } from '../components'

const Error: React.FC = () => {
	return (
		<CenterContainer>
			<ErrorMessage>404 Not found</ErrorMessage>
		</CenterContainer>
	)
}

export default Error
