import { CTA, Container, Button, Input, ErrBox } from './form'
import { RestPropsWithChildren } from '../../types/props'

const Form = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Form.Input = ({ children, ...props }: RestPropsWithChildren) => {
	return <Input {...props}>{children}</Input>
}

Form.Button = ({ children, ...props }: RestPropsWithChildren) => {
	return <Button {...props}>{children}</Button>
}

Form.ErrBox = ({ children, ...props }: RestPropsWithChildren) => {
	return (
		<ErrBox type='warning' {...props}>
			{children}
		</ErrBox>
	)
}

Form.CTA = ({ children, ...props }: RestPropsWithChildren) => {
	return <CTA {...props}>{children}</CTA>
}

export default Form
