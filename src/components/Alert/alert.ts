import styled from 'styled-components/macro'

export const Container = styled.div<{ type?: 'warning' | 'primary' }>`
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding-left: 1em;
	font-size: 0.85em;
	background-color: ${props =>
		props.type === 'warning' ? '#f8d7da' : '#cfe2ff'};
	height: 43px;
	border: 1px solid
		${props => (props.type === 'warning' ? '#f5c2c7' : '#b6d4fe')};
	min-width: 400px;
	color: ${props => (props.type === 'warning' ? '#842029' : '#084298')};
`

export const Text = styled.p``
