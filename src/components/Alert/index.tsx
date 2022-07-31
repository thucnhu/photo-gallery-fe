import { RestPropsWithChildren } from '../../types/props'
import { Container, Text } from './alert'

const Alert = ({ children, ...props }: RestPropsWithChildren) => {
	return (
		<Container {...props}>
			<Text>{children}</Text>
		</Container>
	)
}

export default Alert
