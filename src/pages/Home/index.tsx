import React from 'react'
import { Grid } from '../../components'
import { Container, LabelItem, Labels } from './home'

const Home: React.FC = () => {
	return (
		<Container>
			<Labels>
				<LabelItem>Trending</LabelItem>
				<LabelItem>Recent</LabelItem>
			</Labels>
			<Grid />
		</Container>
	)
}

export default Home
