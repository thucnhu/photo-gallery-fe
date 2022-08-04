import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	height: 55px;
	width: 100%;
	margin-bottom: 0.5rem;
`

export const Label = styled.div`
	width: fit-content;
	padding: 0 3em;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	:hover {
		border-bottom: 2.5px solid var(--dark-gray);
		margin-top: 2.5px;
		padding-bottom: 1em;
	}

	:focus {
		border-bottom: 2.5px solid var(--blue);
		margin-top: 2.5px;
	}
`
