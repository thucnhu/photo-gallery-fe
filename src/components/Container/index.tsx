import { Primary, Center, Flex } from './container'
import { RestPropsWithChildren } from '../../types/props'

const Container = ({ children, ...props }: RestPropsWithChildren) => {
	return <div {...props}>{children}</div>
}

Container.Primary = ({ children, ...props }: RestPropsWithChildren) => {
	return <Primary {...props}>{children}</Primary>
}

Container.Center = ({ children, ...props }: RestPropsWithChildren) => {
	return <Center {...props}>{children}</Center>
}

Container.Flex = ({ children, ...props }: RestPropsWithChildren) => {
	return <Flex {...props}>{children}</Flex>
}

export default Container
