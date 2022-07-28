import styled from 'styled-components/macro'

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
	padding: 5.3em 0;
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

export const PrimaryButton = styled(Button)`
	background-color: var(--blue);
`

export const Input = styled.input`
	width: 80%;
	height: 43px;
	border-radius: 8px;
	padding: 1em;
	border: none;
	background-color: rgb(235, 235, 235);
`

export const ErrBox = styled.div`
	position: absolute;
	top: 100px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding-left: 1em;
	font-size: 0.85em;
	background-color: #f8d7da;
	height: 43px;
	border: 1px solid #f5c2c7;
	width: 550px;
	@media (max-width: 600px) {
		width: 90%;
	}
`

export const Message = styled.p`
	color: #842029;
`
