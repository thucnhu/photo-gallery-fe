import React from 'react'
import { Container } from './body'

const Body = ({ children }: React.PropsWithChildren) => {
	return <Container>{children}</Container>
}

export default Body
