import React from 'react'
import {
	CTA,
	Container,
	Button,
	Input,
	PrimaryButton,
	ErrBox,
	Message,
} from './form'

type Props = React.PropsWithChildren<{}> & {
	[key: string]: any
}

const Form = ({ children, ...props }: Props) => {
	return <Container {...props}>{children}</Container>
}

Form.Input = ({ children, ...props }: Props) => {
	return <Input {...props}>{children}</Input>
}

Form.Button = ({ children, ...props }: Props) => {
	return <Button {...props}>{children}</Button>
}

Form.PrimaryButton = ({ children, ...props }: Props) => {
	return <PrimaryButton {...props}>{children}</PrimaryButton>
}

Form.ErrBox = ({ children, ...props }: Props) => {
	return <ErrBox {...props}>{children}</ErrBox>
}

Form.Message = ({ children, ...props }: Props) => {
	return <Message {...props}>{children}</Message>
}

Form.CTA = ({ children, ...props }: Props) => {
	return <CTA {...props}>{children}</CTA>
}

export default Form
