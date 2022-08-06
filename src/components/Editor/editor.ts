import styled from 'styled-components/macro'

export const Container = styled.form<{ modal?: boolean }>`
	max-height: 100vh;
	width: 550px;
	@media (max-width: 600px) {
		width: 90%;
	}
	z-index: ${({ modal }) => (modal ? '10' : '0')};
`

export const Caption = styled.input`
	width: 100%;
	height: 40px;
	background-color: var(--gray);
	padding: 1em;
	border: none;
	border-radius: 8px;
`

export const ImgContainer = styled.div`
	width: 100%;
	margin: 1.5rem 0;
	display: flex;
	flex-direction: column;
`

export const Img = styled.img`
	max-width: 100%;
	height: auto;
	object-fit: cover;
`

export const Description = styled.textarea<{ modal?: boolean }>`
	width: 100%;
	resize: ${({ modal }) => (modal ? 'none' : 'vertical')};
	min-height: 90px;
	background-color: var(--gray);
	padding: 1em;
	border: none;
	height: auto;
`

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 190px;
	justify-content: space-between;
`
