import { PropsWithChildren } from 'react'
import { Container } from './icon'

const Icon: React.FC = ({ children, ...props }: PropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

export default Icon
