import React, { useContext } from 'react'
import { Grid } from '../../components'
import { Container, LabelItem, Labels } from './home'
import AuthContext from '../../context/AuthContext'

const Home: React.FC = () => {
	const { auth } = useContext(AuthContext)
	console.log(auth)
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
