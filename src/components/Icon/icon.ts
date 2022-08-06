import styled from 'styled-components/macro'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'

export const Container = styled.button<{ small?: boolean }>`
	border: none;
	background-color: transparent;
	width: fit-content;
	font-size: ${props => (props.small ? '0.85rem' : '1.3rem')};
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Comment = styled(BiCommentDetail)``

export const ThreeDots = styled(BsThreeDotsVertical)`
	cursor: pointer;
	font-size: 1.2rem;
	:hover {
		border-radius: 50%;
		background-color: var(--gray);
	}
`

export const HeartFill = styled(BsSuitHeartFill)`
	cursor: pointer;
	color: red;
`

export const Heart = styled(BsSuitHeart)`
	cursor: pointer;
`
