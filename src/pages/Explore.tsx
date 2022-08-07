import React, { useEffect } from 'react'
import { TopicCard, Container } from '../components'
import { getTopics } from '../api/topics'
import { TopicType } from '../types/props'
import { SERVER_BASE_URL } from '../constants/routes'

const Explore: React.FC = () => {
	const [topics, setTopics] = React.useState<TopicType[]>([])

	useEffect(() => {
		getTopics()
			.then(({ data }) => setTopics(data))
			.catch(err => console.log(err))
	}, [])

	return (
		<Container.Primary>
			<Container.Flex>
				{topics.map(topic => (
					<TopicCard
						key={topic.id}
						name={topic.name}
						posts_count={topic.posts_count}
						avatar_path={SERVER_BASE_URL + topic.avatar_path}
						id={topic.id}
					/>
				))}
			</Container.Flex>
		</Container.Primary>
	)
}

export default Explore
