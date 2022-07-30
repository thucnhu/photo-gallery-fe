import {
	CTA,
	Container,
	Button,
	Input,
	PrimaryButton,
	ErrBox,
	Message,
} from './form'
import { RestPropsWithChildren } from '../../constants/props'

const Form = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Form.Input = ({ children, ...props }: RestPropsWithChildren) => {
	return <Input {...props}>{children}</Input>
}

Form.Button = ({ children, ...props }: RestPropsWithChildren) => {
	return <Button {...props}>{children}</Button>
}

Form.PrimaryButton = ({ children, ...props }: RestPropsWithChildren) => {
	return <PrimaryButton {...props}>{children}</PrimaryButton>
}

Form.ErrBox = ({ children, ...props }: RestPropsWithChildren) => {
	return <ErrBox {...props}>{children}</ErrBox>
}

Form.Message = ({ children, ...props }: RestPropsWithChildren) => {
	return <Message {...props}>{children}</Message>
}

Form.CTA = ({ children, ...props }: RestPropsWithChildren) => {
	return <CTA {...props}>{children}</CTA>
}

export default Form
