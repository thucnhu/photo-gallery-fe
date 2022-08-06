import { RestPropsWithChildren } from '../../types/props'
import {
	ButtonArea,
	Form,
	RowItem,
	Label,
	Input,
	Username,
	Avatar,
	AvatarLabel,
	AvatarInput,
} from './profileForm'

const ProfileForm = ({ children, ...props }: RestPropsWithChildren) => {
	return <Form {...props}>{children}</Form>
}

ProfileForm.AvatarLabel = ({ children, ...props }: RestPropsWithChildren) => {
	return <AvatarLabel {...props}>{children}</AvatarLabel>
}

ProfileForm.AvatarInput = ({ children, ...props }: RestPropsWithChildren) => {
	return <AvatarInput {...props}>{children}</AvatarInput>
}

ProfileForm.RowItem = ({ children, ...props }: RestPropsWithChildren) => {
	return <RowItem {...props}>{children}</RowItem>
}

ProfileForm.Input = ({ children, ...props }: RestPropsWithChildren) => {
	return <Input {...props}>{children}</Input>
}

ProfileForm.Label = ({ children, ...props }: RestPropsWithChildren) => {
	return <Label {...props}>{children}</Label>
}

ProfileForm.Avatar = ({ children, ...props }: RestPropsWithChildren) => {
	return <Avatar {...props}>{children}</Avatar>
}

ProfileForm.Username = ({ children, ...props }: RestPropsWithChildren) => {
	return <Username {...props}>{children}</Username>
}

ProfileForm.ButtonArea = ({ children, ...props }: RestPropsWithChildren) => {
	return <ButtonArea {...props}>{children}</ButtonArea>
}

export default ProfileForm
