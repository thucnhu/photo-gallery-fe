import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Icon, Button } from '../..'
import { Avatar } from '../../Post/post'
import {
	Container,
	Header,
	Count,
	CancelButton,
	RowItem,
	Username,
	User,
} from './userList'
import { getPicLikesList, getCmtLikesList } from '../../../api/likes'
import { SERVER_BASE_URL } from '../../../constants/routes'

type Props = {
	hideList: () => void
	picId?: string
	commentId?: string
}

type DataProps = {
	username: string
	avatar_path: string
	isFollowed: boolean
}

const UserList = ({ hideList, picId, commentId }: Props) => {
	const [data, setData] = useState<DataProps[]>()
	const navigate = useNavigate()

	useEffect(() => {
		if (picId) {
			getPicLikesList(picId)
				.then(res => setData(res.data))
				.catch(err => alert('Please try again later!'))
		}
		if (commentId) {
			getCmtLikesList(commentId)
				.then(res => setData(res.data))
				.catch(err => alert('Please try again later!'))
		}
	}, [])

	function directToProfile(username: string) {
		navigate(`/${username}`)
		document.body.style.overflow = 'auto'
	}

	return (
		<Modal>
			<Container>
				<Header>
					<Count>
						<Icon.HeartFill /> {data?.length}
					</Count>
					<CancelButton onClick={hideList} />
				</Header>
				{data?.map((item, index) => (
					<RowItem key={index}>
						<User>
							<Avatar
								onClick={() => directToProfile(item.username)}
								src={SERVER_BASE_URL + item.avatar_path}
							/>
							<Username onClick={() => directToProfile(item.username)}>
								{item.username}
							</Username>
						</User>
						<Button color='green'>Follow</Button>
					</RowItem>
				))}
			</Container>
		</Modal>
	)
}

export default UserList
