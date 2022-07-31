import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import { Alert, Post, PrimaryContainer } from '../components'
import { AvatarArea } from '../components/Post/post'
import { LOG_IN, SERVER_BASE_URL } from '../constants/routes'
import { Comment } from '../types/props'
import AuthContext from '../context/AuthContext'
import postComment from '../api/postComment'
import { getPic } from '../api/getPic'

const Picture: React.FC = () => {
	const [comment, setComment] = useState<string>('')
	const [comments, setComments] = useState<Comment[]>([])
	const [caption, setCaption] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [imgPath, setImgPath] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [createdAt, setCreatedAt] = useState<string>('')

	const { auth } = useContext(AuthContext)
	const { picId } = useParams<{ picId: string }>()
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (picId !== undefined) {
			getPic(parseInt(picId))
				.then(({ data }) => {
					setComments(data.comments)
					setCaption(data.caption)
					setDescription(data.description)
					setUsername(data.username)
					setImgPath(SERVER_BASE_URL + data.img_path)
					setCreatedAt(data.created_at)
				})
				.catch(err => {
					if (err.response?.status === 404) {
						navigate('*')
					} else {
						alert('Please try again later!')
					}
				})
		}
	}, [picId, navigate])

	function handleChangeComment(e: React.ChangeEvent<HTMLInputElement>) {
		setComment(e.target.value)
	}

	async function handlePostComment(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		try {
			if (picId !== undefined) {
				const res = await postComment(parseInt(picId), comment, auth)
				console.log(res)
			}
		} catch (err: any) {
			alert('Error posting comment. Please try again later!')
		}
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

				{auth !== null ? (
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
				) : (
					<Alert>
						Please{' '}
						<Link to={LOG_IN} replace state={{ path: location.pathname }}>
							log in
						</Link>{' '}
						to post your comment
					</Alert>
				)}

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
