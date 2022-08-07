import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 600px;
	@media (max-width: 700px) {
		width: 90%;
	}
`

export const RowItem = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4rem;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	height: 70px;
`

export const Label = styled.div`
	width: 30%;
	text-align: right;
`

export const Input = styled.input`
	width: calc(100% - 30% - 4rem);
	padding: 0.5em;
	border: 1px solid var(--dark-gray);
	border-radius: 2.5px;
	:focus {
		outline: 1px solid var(--blue);
		border: 1px solid var(--blue);
	}
	font-size: 1rem;
`

export const Avatar = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`

export const LinkItem = styled(Link)`
	text-decoration: none;
	color: var(--blue);
	font-weight: bold;
`

export const AvatarInput = styled.input`
	display: none;
`

export const AvatarLabel = styled.label<{ avatarPath?: string }>`
	cursor: pointer;
	background-image: url(${({ avatarPath }) => avatarPath});
	width: 70px;
	height: 70px;
	border-radius: 50%;
	cursor: pointer;
	background-size: cover;
	background-position: center;
	:hover {
		opacity: 0.8;
	}
`

export const ButtonArea = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.2rem;
	width: calc(100% - 30% - 4rem);
`

export const Username = styled.h2`
	width: calc(100% - 30% - 4rem);
`

export const changeProfile = styled.h3`
	color: var(--blue);
`
