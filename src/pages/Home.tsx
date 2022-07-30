import React, { useContext } from 'react'
import { PrimaryContainer, Grid } from '../components'
import AuthContext from '../context/AuthContext'

const Home: React.FC = () => {
	const { auth } = useContext(AuthContext)
	console.log(auth)
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
