import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Editor, Container, UploadCard, Button } from '../components'
import backgroundImg from '../images/upload.jpeg'
import { postPic } from '../api/pictures'

const Upload: React.FC = () => {
	const [uploadedImg, setUploadedImg] = React.useState<File | null>()
	const [caption, setCaption] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')

	const navigate = useNavigate()

	function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		if (e.target.files) setUploadedImg(e.target.files[0])
	}

	async function handlePublish(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		if (uploadedImg) {
			try {
				const res = await postPic(uploadedImg, caption, description)
				navigate(`/pictures/${res.data.id}`)
			} catch (err: any) {
				if (!err?.response) {
					alert('Network Error')
				} else {
					alert('Please try again later!')
				}
			}
		}
	}

	function handleChangeCaption(e: React.ChangeEvent<HTMLInputElement>) {
		setCaption(e.target.value)
	}

	function handleChangeDescription(e: React.ChangeEvent<HTMLInputElement>) {
		setDescription(e.target.value)
	}

	const handleCancel = () => setUploadedImg(null)

	return (
		<>
			{uploadedImg ? (
				<Container.Primary>
					<Editor onSubmit={handlePublish}>
						<Editor.Caption
							placeholder='Your punchy caption goes here'
							value={caption}
							onChange={handleChangeCaption}
							name='caption'
							type='text'
							required
						/>
						<Editor.ImgContainer>
							<Editor.Img src={URL.createObjectURL(uploadedImg)} />
							<Editor.Description
								placeholder='Give it a nice and short description!'
								value={description}
								onChange={handleChangeDescription}
								name='description'
								type='text'
								required
							/>
						</Editor.ImgContainer>
						<Editor.ButtonContainer>
							<Button type='submit'>Publish</Button>
							<Button color='red' onClick={handleCancel} type='reset'>
								Cancel
							</Button>
						</Editor.ButtonContainer>
					</Editor>
				</Container.Primary>
			) : (
				<Container.Center>
					<UploadCard>
						<UploadCard.ImgContainer>
							<UploadCard.Image src={backgroundImg} />
						</UploadCard.ImgContainer>
						<UploadCard.Title>Upload</UploadCard.Title>
						<UploadCard.Description>
							Images are better than words
						</UploadCard.Description>
						<UploadCard.Label htmlFor='upload-input'>
							{' '}
							Choose image
							<UploadCard.Input
								id='upload-input'
								type='file'
								accept='image/png, image/jpeg, image/jpg'
								onChange={handleUpload}
							/>
						</UploadCard.Label>
					</UploadCard>
				</Container.Center>
			)}
		</>
	)
}

export default Upload
