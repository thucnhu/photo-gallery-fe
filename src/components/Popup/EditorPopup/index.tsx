import { Editor, Modal, Button } from '../../'

type Props = {
	handleUpdatePicture: (event: React.FormEvent<HTMLFormElement>) => void
	handleCancel: (type: 'update' | 'delete') => void
	handleChangeCaption: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	captionInput: string
	imgPath: string
	descriptionInput: string
	handleChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const EditorPopup = ({
	handleUpdatePicture,
	handleCancel,
	handleChangeCaption,
	captionInput,
	imgPath,
	descriptionInput,
	handleChangeDescription,
}: Props) => {
	return (
		<Modal>
			<Editor modal onSubmit={handleUpdatePicture}>
				<Editor.Caption
					value={captionInput}
					onChange={handleChangeCaption}
					type='text'
					name='caption'
					required
				/>
				<Editor.ImgContainer>
					<Editor.Img src={imgPath} />
					<Editor.Description
						modal
						value={descriptionInput}
						onChange={handleChangeDescription}
						type='text'
						name='description'
						required
					/>
				</Editor.ImgContainer>
				<Editor.ButtonContainer>
					<Button type='submit'>Publish</Button>
					<Button
						color='gray'
						type='reset'
						onClick={() => handleCancel('update')}
					>
						Cancel
					</Button>
				</Editor.ButtonContainer>
			</Editor>
		</Modal>
	)
}

export default EditorPopup
