import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: center;
	height: 140px;
	@media (max-width: 665px) {
		height: 100px;
	}
	margin-bottom: 1rem;
`

export const Avatar = styled.img`
	height: 100%;
	border-radius: 50%;
	margin-right: 3rem;
	object-fit: cover;
	border: 0.5px solid var(--gray);
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	height: 80%;
`

export const Username = styled.h1``

export const Stats = styled.div`
	display: flex;
	flex-direction: row;
	width: 350px;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 665px) {
		display: none;
	}
`

export const Posts = styled.p``

export const Followers = styled.p`
	cursor: pointer;
`

export const Following = styled.p`
	cursor: pointer;
`
