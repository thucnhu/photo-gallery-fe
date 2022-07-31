import styled from 'styled-components/macro'
import Button from '../Button'

export const Container = styled.div`
	@media (max-width: 630px) {
		width: 98%;
	}
	width: 580px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const Caption = styled.h4``

export const Description = styled.p`
	font-size: 0.95rem;
`

export const Avatar = styled.img`
	border-radius: 50%;
	height: 100%;
`

export const Username = styled.p``

export const CreatedAt = styled.p`
	font-size: 0.8em;
`

export const LikeIcon = styled.i``

export const AvatarArea = styled.div<{ small?: boolean }>`
	display: flex;
	align-items: center;
	height: ${props => (props.small ? '35px' : '45px')};
	margin: ${props => (props.small ? '0.2rem 0' : '1rem 0')};
	font-size: ${props => (props.small ? '0.85rem' : '1rem')};
`

export const Picture = styled.img`
	width: auto;
	margin: 1.2rem 0;
`

export const AvatarRightArea = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 0.6rem;
	height: 100%;
	justify-content: space-evenly;
`

export const CommentForm = styled.form`
	width: 100%;
	border-radius: 10px;
	box-shadow: var(--shadow);
	height: auto;
	padding: 0.8em;
	height: 120px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
`

export const Comment = styled.div`
	margin-top: 0.8rem;
`

export const CommentInput = styled.textarea`
	border: none;
	max-height: 60%;
	min-height: 60%;
	max-width: 100%;
	min-width: 100%;
	overflow: scroll;
`

export const CommentText = styled.p`
	margin: 0.3rem 0;
	font-size: 0.85rem;
	margin-left: 44px;
	border-bottom: 1px solid black;
	padding-bottom: 0.3em;
`

export const CommentButton = styled(Button)`
	background-color: var(--gray);
`
