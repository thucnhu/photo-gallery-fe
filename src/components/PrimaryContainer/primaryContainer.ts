import styled from 'styled-components/macro'

export const Container = styled.div<{ gray?: boolean }>`
	width: 100vw;
	height: auto;
	min-height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.8rem 7vw 3rem 7vw;
	background-color: ${props => (props.gray ? 'var(--gray)' : 'var(--white)')};
`
