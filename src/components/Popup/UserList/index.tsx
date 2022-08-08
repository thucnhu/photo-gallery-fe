import { Modal, Icon } from '../..'
import { Avatar } from '../../Post/post'
import {
	Container,
	Header,
	Count,
	CancelButton,
	RowItem,
	Username,
} from './userList'

type Props = {
	hideList: () => void
}

const UserList = ({ hideList }: Props) => {
	return (
		<Modal>
			<Container>
				<Header>
					<Count>
						<Icon.HeartFill /> 200
					</Count>
					<CancelButton onClick={hideList} />
				</Header>
				<RowItem>
					<Avatar src='https://i.pravatar.cc/301' />
					<Username>username</Username>
				</RowItem>
				<RowItem>
					<Avatar src='https://i.pravatar.cc/300' />
					<Username>username</Username>
				</RowItem>
				<RowItem>
					<Avatar src='https://i.pravatar.cc/302' />
					<Username>username</Username>
				</RowItem>
				<RowItem>
					<Avatar src='https://i.pravatar.cc/301' />
					<Username>username</Username>
				</RowItem>
				<RowItem>
					<Avatar src='https://i.pravatar.cc/300' />
					<Username>username</Username>
				</RowItem>
				<RowItem>
					<Avatar src='https://i.pravatar.cc/302' />
					<Username>username</Username>
				</RowItem>
				<RowItem>
					<Avatar src='https://i.pravatar.cc/301' />
					<Username>username</Username>
				</RowItem>
			</Container>
		</Modal>
	)
}

export default UserList
