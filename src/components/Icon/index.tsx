import { PropsWithChildren } from 'react'
import { Container } from './icon'
import { HeartFill, Heart } from './icon'

type Props = PropsWithChildren & {
	onClick: () => void
	small?: boolean
}

const Icon = ({ children, ...props }: PropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Icon.HeartFill = ({ children, ...props }: Props) => {
	return (
		<Container {...props}>
			<HeartFill />
		</Container>
	)
}

Icon.Heart = ({ children, ...props }: Props) => {
	return (
		<Container {...props}>
			<Heart />
		</Container>
	)
}

export default Icon
