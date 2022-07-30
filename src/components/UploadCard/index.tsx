import React from 'react'
import {
	Image,
	Title,
	Description,
	Container,
	ImgContainer,
	Button,
	Input,
} from './uploadCard'

type Props = React.PropsWithChildren<{}> & {
	[key: string]: any
}

const Card = ({ children, ...props }: Props) => {
	return <Container {...props}>{children}</Container>
}

Card.Image = ({ children, ...props }: Props) => {
	return <Image {...props}>{children}</Image>
}

Card.Title = ({ children, ...props }: Props) => {
	return <Title {...props}>{children}</Title>
}

Card.Description = ({ children, ...props }: Props) => {
	return <Description {...props}>{children}</Description>
}

Card.ImgContainer = ({ children, ...props }: Props) => {
	return <ImgContainer {...props}>{children}</ImgContainer>
}

Card.Button = ({ children, ...props }: Props) => {
	return <Button {...props}>{children}</Button>
}

Card.Input = ({ children, ...props }: Props) => {
	return <Input {...props}>{children}</Input>
}

export default Card
