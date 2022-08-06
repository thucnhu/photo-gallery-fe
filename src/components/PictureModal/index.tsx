import React, { useReducer } from 'react'
import { Container } from './pictureModal'
import { Editor, Button } from '../'
import { PictureProps } from '../../types/props'
import { updatePic } from '../../api/pictures'

type State = {
	caption: string
	description: string
	isShowed: boolean
}

type Action =
	| { type: 'change'; field: string; payload: string }
	| { type: 'submit' }

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'change':
			return { ...state, [action.field]: action.payload }
		case 'submit':
			return { ...state, isShowed: false }
		default:
			return state
	}
}

const PictureModal = ({ picture }: { picture: PictureProps }) => {
	const [state, dispatch] = useReducer(reducer, {
		caption: picture.caption,
		description: picture.description,
		isShowed: true,
	})
	const { caption, description, isShowed } = state

	function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
		dispatch({
			type: 'change',
			field: 'description',
			payload: e.target.value,
		})
	}

	function handleChangeCaption(e: React.ChangeEvent<HTMLTextAreaElement>) {
		dispatch({ type: 'change', field: 'caption', payload: e.target.value })
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		// e.preventDefault()
		await updatePic(picture.id, caption, description)
		dispatch({ type: 'submit' })
	}

	return (
		<>
			{isShowed && (
				<Container>
					<Editor modal onSubmit={handleSubmit}>
						<Editor.Caption
							value={caption}
							onChange={handleChangeCaption}
							type='text'
							name='caption'
							required
						/>
						<Editor.ImgContainer>
							<Editor.Img src={picture.img_path} />
							<Editor.Description
								modal
								value={description}
								onChange={handleChangeDescription}
								type='text'
								name='description'
								required
							/>
						</Editor.ImgContainer>
						<Button type='submit'>Publish</Button>
					</Editor>
				</Container>
			)}
		</>
	)
}

export default PictureModal
