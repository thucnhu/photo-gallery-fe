import styled from 'styled-components/macro'

export const Container = styled.div`
	margin-top: 1rem;
`

export const Text = styled.p`
	margin: 0.3rem 0;
	font-size: 0.85rem;
	margin-left: 44px;
	border-bottom: 1px solid black;
	padding-bottom: 0.3em;
`

export const TextInput = styled.input`
	margin: 0.3rem 0;
	margin-left: 44px;
	border: none;
	border-bottom: 1px solid var(--dark-gray);
	color: var(--dark-gray);
	font-size: 0.85rem;
	padding-bottom: 0.3em;
	width: calc(100% - 44px);
`
