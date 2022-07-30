import React from 'react'
import { Container } from './button'

type Props = React.PropsWithChildren<{}> & {
	[key: string]: any
}

const Button = ({ children, ...props }: Props) => {
	return <Container {...props}>{children}</Container>
}

export default Button
