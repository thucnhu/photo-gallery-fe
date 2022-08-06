import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	position: sticky;
	top: 60px;
	background-color: var(--gray);
	flex-direction: row;
	justify-content: flex-start;
	height: 55px;
	width: 100%;
	padding: 0px 5vw;
`

export const Label = styled.div<{ focus?: boolean }>`
	width: fit-content;
	padding: 0 3em;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	border-bottom: ${({ focus }) =>
		focus ? '2.5px solid var(--blue)' : 'none'};

	:hover {
		border-bottom: 2.5px solid var(--dark-gray);
		padding-bottom: 1em;
	}
`
