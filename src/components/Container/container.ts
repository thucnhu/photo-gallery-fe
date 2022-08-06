import styled from 'styled-components/macro'

export const Primary = styled.div<{ gray?: boolean }>`
	width: 100vw;
	height: auto;
	min-height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.8rem 5vw 3rem 5vw;
	background-color: ${props => (props.gray ? 'var(--gray)' : 'var(--white)')};
`

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 60px);
`
