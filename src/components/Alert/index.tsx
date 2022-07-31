import { RestPropsWithChildren } from '../../types/props'
import { Container } from './alert'

const Alert = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

export default Alert
