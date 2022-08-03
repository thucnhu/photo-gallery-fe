import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`

export const Column = styled.div`
	flex: 25%;
	max-width: 25%;
	padding: 0 10px;

	@media (max-width: 1100px) {
		flex: calc(100% / 3);
		max-width: calc(100% / 3);
	}

	@media (max-width: 800px) {
		-ms-flex: 50%;
		flex: 50%;
		max-width: 50%;
	}

	@media (max-width: 500px) {
		-ms-flex: 100%;
		flex: 100%;
		max-width: 100%;
	}
`
