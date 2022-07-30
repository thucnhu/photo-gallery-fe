import React from 'react'
import { CenterContainer } from '../components'
import { ErrorMessage } from '../components'

const Error: React.FC = () => {
	return (
		<CenterContainer>
			<ErrorMessage>404</ErrorMessage>
		</CenterContainer>
	)
}

export default Error
