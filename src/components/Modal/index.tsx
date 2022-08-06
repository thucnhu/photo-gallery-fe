import { Container } from './modal'
import { RestPropsWithChildren } from '../../types/props'

const Modal = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

export default Modal
