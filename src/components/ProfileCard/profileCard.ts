import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
`

export const Avatar = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 50%;
	margin-right: 4rem;
	object-fit: cover;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`

export const Username = styled.h1``

export const Stats = styled.div`
	display: flex;
	flex-direction: row;
	width: 350px;
	justify-content: space-between;
	align-items: center;
`

export const Posts = styled.p``

export const Followers = styled.p``

export const Following = styled.p``
