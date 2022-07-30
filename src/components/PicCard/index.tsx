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
	src: string
	description: string
	likes: string
	comments: string
}

const PicCard: React.FC<Props> = ({ src, description, likes, comments }) => {
	return (
		<Container>
			<ImgContainer>
				<Image src={src} alt='image' />
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
