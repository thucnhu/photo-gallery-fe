import React from 'react'
import {
	Container,
	Image,
	ImgContainer,
	Description,
	Stats,
	Likes,
	Comments,
} from './picCard'
import img from '../../images/upload.jpeg'

const PicCard: React.FC<{ src: string }> = ({ src }) => {
	return (
		<Container>
			<ImgContainer>
				<Image src={src} alt='image' />
			</ImgContainer>
			<Description>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
				laborum officiis veritatis deserunt totam eaque quasi fugiat nemo
				itaque illum molestiae ratione iure exercitationem nobis
				perspiciatis quaerat tempora consectetur eius.
			</Description>
			<Stats>
				<Likes>200</Likes>
				<Comments>200</Comments>
			</Stats>
		</Container>
	)
}

export default PicCard
