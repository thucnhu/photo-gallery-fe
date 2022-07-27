import styled from 'styled-components/macro'

export const Container = styled.form`
	@media (max-width: 450px) {
		width: 90%;
	}
	width: 400px;
	height: 400px;
	border-radius: 20px;
	box-shadow: var(--shadow-md);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 6em 0;
`

export const Button = styled.button`
	width: 75%;
	height: 40px;
	border-radius: 8px;
	background-color: var(--green);
	border: none;
	box-shadow: var(--shadow);
	color: white;
`

export const PrimaryButton = styled(Button)`
	background-color: var(--blue);
`

export const Input = styled.input`
	width: 75%;
	height: 40px;
	border-radius: 8px;
	padding: 1em;
	border: none;
	background-color: rgb(235, 235, 235);
`
