import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f5f5f5;
	height: 170px;
	width: 200px;
	border-radius: 8px;
	box-shadow: var(--shadow);
	cursor: pointer;
`

export const Img = styled.img`
	width: 100%;
	height: 110px;
	object-fit: cover;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
`

export const Info = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`

export const Name = styled.h4``

export const PostsCount = styled.p``
