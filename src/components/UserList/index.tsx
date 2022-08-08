import { Container } from './userList'
import { RestPropsWithChildren } from '../../types/props'

const UserList = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

export default UserList
