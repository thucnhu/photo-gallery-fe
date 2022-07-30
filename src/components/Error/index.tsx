import { Message } from './error'
import { RestPropsWithChildren } from '../../types/props'

const ErrorMessage = ({ children, ...props }: RestPropsWithChildren) => {
	return <Message {...props}>{children}</Message>
}

export default ErrorMessage
