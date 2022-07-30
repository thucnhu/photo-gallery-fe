import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import { Post, PrimaryContainer } from '../components'
import { AvatarArea } from '../components/Post/post'
import { SERVER_BASE_URL } from '../constants/routes'
import { Comment } from '../types/props'

const Picture: React.FC = () => {
	const [comment, setComment] = useState<string>('')
	const [comments, setComments] = useState<Comment[]>([])
	const [caption, setCaption] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [imgPath, setImgPath] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [createdAt, setCreatedAt] = useState<string>('')

	const { picId } = useParams<{ picId: string }>()

	useEffect(() => {
		axios
			.get(`/pictures/${picId}`)
			.then(({ data }) => {
				console.log(data)
				setComments(data.comments)
				setCaption(data.caption)
				setDescription(data.description)
				setUsername(data.username)
				setImgPath(SERVER_BASE_URL + data.img_path)
				setCreatedAt(data.created_at)
			})
			.catch(err => {
				console.log(err)
			})
	}, [picId])

	function handleChangeComment(e: React.ChangeEvent<HTMLInputElement>) {
		setComment(e.target.value)
	}

	function handlePostComment(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		console.log(comment)
	}

	return (
		<PrimaryContainer>
			<Post>
				<Post.Caption>{caption}</Post.Caption>
				<Post.AvatarArea>
					<Post.Avatar src='https://i.pravatar.cc/300' />
					<Post.AvatarRightArea>
						<Post.Username>{username}</Post.Username>
						<Post.CreatedAt>{createdAt}</Post.CreatedAt>
					</Post.AvatarRightArea>
				</Post.AvatarArea>
				<Post.Description>{description}</Post.Description>
				<Post.Picture src={imgPath} />
				<Post.LikeIcon />
				<Post.CommentForm onSubmit={handlePostComment}>
					<Post.CommentInput
						type='text'
						name='comment'
						value={comment}
						onChange={handleChangeComment}
						placeholder='Write a comment...'
						required
					/>
					<Post.CommentButton type='submit' color='gray'>
						Send
					</Post.CommentButton>
				</Post.CommentForm>
				{comments.map(comment => (
					<Post.Comment key={comment.id}>
						<AvatarArea small>
							<Post.Avatar src='https://i.pravatar.cc/300' />
							<Post.AvatarRightArea>
								<Post.Username>{comment.username}</Post.Username>
								<Post.CreatedAt>{comment.created_at}</Post.CreatedAt>
							</Post.AvatarRightArea>
						</AvatarArea>
						<Post.CommentText>{comment.text}</Post.CommentText>
					</Post.Comment>
				))}
			</Post>
		</PrimaryContainer>
	)
}

export default Picture
