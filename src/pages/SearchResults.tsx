import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getPicByTopic } from '../api/pictures'

const SearchResult: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const topic = searchParams.get('topic')
	const page = searchParams.get('page') || '0'
	console.log(topic)

	useEffect(() => {
		if (topic) {
			getPicByTopic(topic, page)
				.then(({ data }) => console.log(data))
				.catch(err => console.log(err))
		}
	}, [])

	return <div>SearchResult</div>
}

export default SearchResult
