import { Container, Item } from './popup'
import { RestPropsWithChildren } from '../../types/props'

type ItemProps = RestPropsWithChildren & {
	to: string
}

const Popup = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Popup.Item = ({ children, ...props }: ItemProps) => {
	return <Item {...props}>{children}</Item>
}

export default Popup
