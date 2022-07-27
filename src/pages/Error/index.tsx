import React from 'react'
import { CenterContainer } from '../../components'
import { Message } from './error'

const Error: React.FC = () => {
	return (
		<CenterContainer>
			<Message>404</Message>
		</CenterContainer>
	)
}

export default Error
