import styled from 'styled-components/macro'

export const Container = styled.div<{ gray?: boolean }>`
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 5vw 3rem 5vw;
	background-color: ${props => (props.gray ? 'var(--gray)' : 'var(--white)')};
`
