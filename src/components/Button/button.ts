import styled from 'styled-components/macro'

export const Container = styled.button<{ color?: 'blue' | 'gray' | 'green' }>`
	padding: 0.65em 1.5em;
	border-radius: 6px;
	background-color: ${props =>
		props.color ? `var(--${props.color})` : 'var(--blue)'};
	border: none;
	width: fit-content;
	color: ${props => (props.color === 'gray' ? 'black' : 'white')};
	box-shadow: var(--shadow);
	cursor: pointer;
`

export const Icon = styled.i`
	margin-right: 0.5em;
`
