import React, { useContext } from 'react'
import { PrimaryContainer, Grid } from '../components'
import AuthContext from '../context/AuthContext'

const Home: React.FC = () => {
	return (
		<PrimaryContainer gray>
			{/* <Labels>
				<LabelItem>Trending</LabelItem>
				<LabelItem>Recent</LabelItem>
			</Labels> */}
			<Grid />
		</PrimaryContainer>
	)
}

export default Home
