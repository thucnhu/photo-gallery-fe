import React from 'react'
import { Container } from './primaryContainer'

const PrimaryContainer = ({ children }: React.PropsWithChildren) => {
	return <Container>{children}</Container>
}

export default PrimaryContainer
