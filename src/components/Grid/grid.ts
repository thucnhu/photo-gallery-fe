import styled from 'styled-components/macro'

export const Container = styled.div`
	columns: 4;
	column-fill: balance;
	column-gap: 1.5rem;
	margin-top: 1.5rem;
	@media (max-width: 1100px) {
		columns: 3;
	}

	@media (max-width: 800px) {
		columns: 2;
	}

	@media (max-width: 480px) {
		columns: 1;
	}
`
