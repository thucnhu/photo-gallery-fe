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

type Props = {
	img: string
	description: string
	likes: number
	comments: number
}

const PicCard: React.FC<Props> = ({ img, description, likes, comments }) => {
	return (
		<Container>
			<ImgContainer>
				<Image src={img} alt='image' />
			</ImgContainer>
			<Description>{description}</Description>
			<Stats>
				<Likes>{likes}</Likes>
				<Comments>{comments}</Comments>
			</Stats>
		</Container>
	)
}

export default PicCard
