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
	justify-content: center;
	align-items: center;
	margin: 1.5rem 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--gray);
`

export const Img = styled.img`
	height: 530px;
	@media (max-height: 740px) {
		height: 400px;
	}

	@media (max-height: 600px) {
		height: 350px;
	}
	width: 100%;
	object-fit: contain;
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
