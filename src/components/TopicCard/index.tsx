import { useNavigate } from 'react-router-dom'
import { TopicType } from '../../types/props'
import { Container, Img, Name, PostsCount, Info } from './topicCard'

const TopicCard: React.FC<TopicType> = props => {
	const navigate = useNavigate()

	return (
		<Container onClick={() => navigate(`/search?topic=${props.name}`)}>
			<Img src={props.avatar_path} />
			<Info>
				<Name>{props.name}</Name>
				<PostsCount>{props.posts_count} posts</PostsCount>
			</Info>
		</Container>
	)
}

export default TopicCard
