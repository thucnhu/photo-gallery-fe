import styled from 'styled-components/macro'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

export const Container = styled.button<{ small?: boolean }>`
	border: none;
	background-color: transparent;
	width: fit-content;
	cursor: pointer;
	font-size: ${props => (props.small ? '0.85rem' : '1.5rem')};
`

export const HeartFill = styled(BsSuitHeartFill)`
	color: red;
`

export const Heart = styled(BsSuitHeart)``
