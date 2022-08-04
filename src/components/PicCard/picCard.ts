import styled from 'styled-components/macro'

export const Container = styled.div`
	border-radius: 10px;
	box-shadow: var(--shadow-md);
	margin-bottom: 1.5rem;
	cursor: pointer;
	display: block;
	break-inside: avoid;
`

export const Image = styled.img`
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	width: 100%;
	object-fit: cover;
`

export const Description = styled.p`
	padding: 0.3em 0.7em;
	display: -webkit-box;
	max-width: 100%;
	line-height: 1.5;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`

export const Stats = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.7em 0.7em 0.7em;
`

export const Likes = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Comments = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`
