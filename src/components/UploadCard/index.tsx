import {
	Image,
	Title,
	Description,
	Container,
	ImgContainer,
	Button,
	Input,
} from './uploadCard'
import { RestPropsWithChildren } from '../../constants/props'

const Card = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Card.Image = ({ children, ...props }: RestPropsWithChildren) => {
	return <Image {...props}>{children}</Image>
}

Card.Title = ({ children, ...props }: RestPropsWithChildren) => {
	return <Title {...props}>{children}</Title>
}

Card.Description = ({ children, ...props }: RestPropsWithChildren) => {
	return <Description {...props}>{children}</Description>
}

Card.ImgContainer = ({ children, ...props }: RestPropsWithChildren) => {
	return <ImgContainer {...props}>{children}</ImgContainer>
}

Card.Button = ({ children, ...props }: RestPropsWithChildren) => {
	return <Button {...props}>{children}</Button>
}

Card.Input = ({ children, ...props }: RestPropsWithChildren) => {
	return <Input {...props}>{children}</Input>
}

export default Card
