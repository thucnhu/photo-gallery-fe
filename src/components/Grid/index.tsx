import PicCard from '../PicCard'
import { Container } from './grid'
import { SERVER_BASE_URL } from '../../constants/routes'
import { PictureProps } from '../../types/props'

const Grid = ({ pictures }: { pictures: PictureProps[] }) => {
	return (
		<Container>
			{pictures?.map(pic => (
				<PicCard
					key={pic.id}
					id={pic.id}
					src={SERVER_BASE_URL + pic.img_path}
					description={pic.description}
					likes={pic.likes_count.toString()}
					comments={pic.comments_count.toString()}
				/>
			))}
		</Container>
	)
}

export default Grid
