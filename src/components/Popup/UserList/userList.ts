import styled from 'styled-components/macro'
import { MdOutlineCancel } from 'react-icons/md'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 10px;
	width: 500px;
	height: 500px;
	@media (max-width: 600px) {
		width: 95%;
	}
	overflow: scroll;
`

export const Header = styled.div`
	padding: 1.5em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.5px solid black;
	padding-bottom: 1em;
`

export const RowItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;
	padding: 0.7em 1.5em;
	transition: all 0.1s ease-in-out;
	:hover {
		background-color: #f5f5f5;
	}
`

export const Username = styled.h4``

export const Count = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
`

export const CancelButton = styled(MdOutlineCancel)`
	font-size: 1.5rem;
	cursor: pointer;
`
