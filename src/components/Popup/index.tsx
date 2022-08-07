import { Container, Item, LinkItem, Text } from './popup'
import { RestPropsWithChildren } from '../../types/props'

type LinkItemProps = RestPropsWithChildren & {
	to: string
}

type ItemProps = RestPropsWithChildren & {
	onClick: () => void
}

const Popup = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Popup.Text = ({ children, ...props }: RestPropsWithChildren) => {
	return <Text {...props}>{children}</Text>
}

Popup.LinkItem = ({ children, ...props }: LinkItemProps) => {
	return <LinkItem {...props}>{children}</LinkItem>
}

Popup.Item = ({ children, ...props }: ItemProps) => {
	return <Item {...props}>{children}</Item>
}

export default Popup
