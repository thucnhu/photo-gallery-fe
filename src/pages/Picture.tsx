import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import { Alert, Post, PrimaryContainer, Comment, Icon } from '../components'
import { LOG_IN, SERVER_BASE_URL } from '../constants/routes'
import { CommentProps } from '../types/props'
import AuthContext from '../context/AuthContext'
import postComment from '../api/comments'
import { getPic } from '../api/pictures'
import useToggle from '../hooks/useToggle'
import { postPicLike, deletePicLike } from '../api/likes'

const Picture: React.FC = () => {
	const [comment, setComment] = useState<string>('')
	const [comments, setComments] = useState<CommentProps[]>([])
	const [caption, setCaption] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [imgPath, setImgPath] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [createdAt, setCreatedAt] = useState<string>('')

	const { picId } = useParams<{ picId: string }>()
	const navigate = useNavigate()
	const location = useLocation()

	const { auth } = useContext(AuthContext)
	const { isToggled, toggle } = useToggle(false)

	useEffect(() => {
		if (picId && auth) {
			getPic(parseInt(picId))
				.then(({ data }) => {
					console.log(data)
					setComments(data.comments)
					setCaption(data.caption)
					setDescription(data.description)
					setUsername(data.username)
					setImgPath(SERVER_BASE_URL + data.img_path)
					setCreatedAt(data.created_at)
					if (data.is_liked) {
						toggle()
					}
				})
				.catch(err => {
					if (err.response?.status === 404) {
						navigate('*')
					} else {
						alert('Please try again later!')
					}
				})
		}
	}, [picId, navigate, auth])

	function handleChangeComment(e: React.ChangeEvent<HTMLInputElement>) {
		setComment(e.target.value)
	}

	async function handlePostComment(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		try {
			if (picId) {
				const res = await postComment(parseInt(picId), comment)
				setComments(prev => [...prev, res.data])
				console.log(res)
			}
		} catch (err: any) {
			alert('Error posting comment. Please try again later!')
		}
	}

	async function handleLike() {
		try {
			if (picId && auth) {
				await postPicLike(picId.toString())
				toggle()
			}
		} catch (err: any) {
			alert('Error occured. Please try again later!')
		}
	}

	async function handleUnlike() {
		try {
			if (picId && auth) {
				await deletePicLike(picId.toString())
				toggle()
			}
		} catch (err: any) {
			alert('Error occured. Please try again later!')
		}
	}

	return (
		<PrimaryContainer>
			<Post>
				<Post.Caption>{caption}</Post.Caption>
				<Post.InfoArea>
					<Post.AvatarArea>
						<Post.Avatar src='https://i.pravatar.cc/302' />
						<Post.AvatarRightArea>
							<Post.Username>{username}</Post.Username>
							<Post.CreatedAt>{createdAt}</Post.CreatedAt>
						</Post.AvatarRightArea>
					</Post.AvatarArea>
					{isToggled ? (
						<Icon.HeartFill onClick={handleUnlike}></Icon.HeartFill>
					) : (
						<Icon.Heart onClick={handleLike}></Icon.Heart>
					)}
				</Post.InfoArea>
				<Post.Description>{description}</Post.Description>
				<Post.Picture src={imgPath} />

				{auth ? (
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

				{comments?.map(comment => (
					<Comment key={comment.id} comment={comment} />
				))}
			</Post>
		</PrimaryContainer>
	)
}

export default Picture
