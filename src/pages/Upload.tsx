import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import {
	Editor,
	CenterContainer,
	PrimaryContainer,
	UploadCard,
	Button,
} from '../components'
import { UPLOAD } from '../constants/routes'
import backgroundImg from '../images/upload.jpeg'
import AuthContext from '../context/AuthContext'
import { postPic } from '../api/pictures'

const Upload: React.FC = () => {
	const [uploadedImg, setUploadedImg] = React.useState<File | null>()
	const [caption, setCaption] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')

	const navigate = useNavigate()
	const { auth } = useContext(AuthContext)
	console.log(auth)

	function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		if (e.target.files) {
			setUploadedImg(e.target.files[0])
			console.log(e.target.files[0])
		}
	}

	async function handlePublish(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		if (uploadedImg) {
			try {
				const res = await postPic(uploadedImg, caption, description)
				console.log(res)
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

	return (
		<>
			{uploadedImg ? (
				<PrimaryContainer>
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
						<Button type='submit'>Publish</Button>
					</Editor>
				</PrimaryContainer>
			) : (
				<CenterContainer>
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
				</CenterContainer>
			)}
		</>
	)
}

export default Upload
