import styled from 'styled-components/macro'
import Alert from '../Alert'

export const Container = styled.form`
	@media (max-width: 450px) {
		width: 90%;
	}
	width: 400px;
	height: 350px;
	border-radius: 20px;
	box-shadow: var(--shadow-md);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 4.8em 0;
`

export const Button = styled.button`
	width: 80%;
	height: 43px;
	border-radius: 8px;
	background-color: var(--green);
	border: none;
	box-shadow: var(--shadow);
	color: white;
	cursor: pointer;
`

export const Input = styled.input`
	width: 80%;
	height: 43px;
	border-radius: 8px;
	padding: 1em;
	border: none;
	background-color: rgb(235, 235, 235);
`

export const ErrBox = styled(Alert)`
	position: absolute;
	top: 100px;
	width: 400px;
	@media (max-width: 450px) {
		width: 90%;
	}
`

export const CTA = styled.p`
	font-size: 0.85em;
`
