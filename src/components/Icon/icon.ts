import styled from 'styled-components/macro'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'

export const Container = styled.button<{ small?: boolean }>`
	border: none;
	background-color: transparent;
	width: fit-content;
	cursor: pointer;
	font-size: ${props => (props.small ? '0.85rem' : '1.3rem')};
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Comment = styled(BiCommentDetail)`
	margin-right: 0.5rem;
`

export const ThreeDots = styled(BsThreeDotsVertical)`
	cursor: pointer;
	font-size: 1.2rem;
`

export const HeartFill = styled(BsSuitHeartFill)`
	color: red;
	margin-right: 0.5em;
`

export const Heart = styled(BsSuitHeart)`
	margin-right: 0.5rem;
`
