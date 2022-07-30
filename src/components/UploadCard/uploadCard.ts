import styled from 'styled-components/macro'

export const Container = styled.div`
	@media (max-width: 450px) {
		width: 90%;
	}
	height: 400px;
	width: 450px;
	border-radius: 15px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	align-items: center;
	display: flex;
	flex-direction: column;
`

export const ImgContainer = styled.div`
	width: 100%;
	height: 60%;
`

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
`

export const Title = styled.h3`
	font-size: 1.4rem;
	text-align: center;
	font-weight: bold;
	line-height: 2;
	margin-top: 0.5rem;
`

export const Description = styled.p`
	text-align: center;
	line-height: 2;
	margin-bottom: 0.7rem;
`

export const Input = styled.input`
	display: none;
`
