import {
	Container,
	ImgContainer,
	Img,
	Caption,
	Description,
	ButtonContainer,
} from './editor'
import { RestPropsWithChildren } from '../../types/props'

const Editor = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Editor.ButtonContainer = ({ children, ...props }: RestPropsWithChildren) => {
	return <ButtonContainer {...props}>{children}</ButtonContainer>
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
