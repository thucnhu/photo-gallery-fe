import React from 'react'
import { Container } from './button'

const Button = ({ children }: React.PropsWithChildren) => {
	return <Container>{children}</Container>
}

export default Button
