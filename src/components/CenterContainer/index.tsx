import React from 'react'
import { Container } from './centerContainer'

const CenterContainer = ({ children }: React.PropsWithChildren) => {
	return <Container>{children}</Container>
}

export default CenterContainer
