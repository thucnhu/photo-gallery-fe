import React from 'react'
import { Container, ImgContainer, Img, Caption, Description } from './editor'

type Props = React.PropsWithChildren & {
	[key: string]: any
}

const Editor = ({ children, ...props }: Props) => {
	return <Container {...props}>{children}</Container>
}

Editor.Caption = ({ children, ...props }: Props) => {
	return <Caption {...props}>{children}</Caption>
}

Editor.ImgContainer = ({ children, ...props }: Props) => {
	return <ImgContainer {...props}>{children}</ImgContainer>
}

Editor.Img = ({ children, ...props }: Props) => {
	return <Img {...props}>{children}</Img>
}

Editor.Description = ({ children, ...props }: Props) => {
	return <Description {...props}>{children}</Description>
}

export default Editor
