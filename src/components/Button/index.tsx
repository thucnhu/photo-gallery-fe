import { Container } from './button'
import { RestPropsWithChildren } from '../../types/props'

const Button = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

export default Button
