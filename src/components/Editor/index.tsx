import { Container, ImgContainer, Img, Caption, Description } from './editor'
import { RestPropsWithChildren } from '../../constants/props'

const Editor = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Editor.Caption = ({ children, ...props }: RestPropsWithChildren) => {
	return <Caption {...props}>{children}</Caption>
}

Editor.ImgContainer = ({ children, ...props }: RestPropsWithChildren) => {
	return <ImgContainer {...props}>{children}</ImgContainer>
}

Editor.Img = ({ children, ...props }: RestPropsWithChildren) => {
	return <Img {...props}>{children}</Img>
}

Editor.Description = ({ children, ...props }: RestPropsWithChildren) => {
	return <Description {...props}>{children}</Description>
}

export default Editor
