import { Primary, Center } from './container'
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

export default Container
