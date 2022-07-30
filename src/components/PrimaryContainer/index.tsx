import { Container } from './primaryContainer'
import { RestPropsWithChildren } from '../../types/props'

const PrimaryContainer = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

export default PrimaryContainer
