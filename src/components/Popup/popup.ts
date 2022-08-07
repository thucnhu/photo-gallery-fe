import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export const Container = styled.div<{ center?: boolean }>`
	transition: all 0.35s ease-in-out;
	width: ${({ center }) => (center ? 'auto' : '130px')};
	height: auto;
	background-color: white;
	border-radius: 8px;
	box-shadow: var(--shadow-lg);
	position: absolute;
	top: ${props => !props.center && '65px'};
	right: ${props => !props.center && '5px'};
	display: flex;
	flex-direction: column;
	padding: 0.5em 0;
	font-size: 0.9rem;
`

export const LinkItem = styled(NavLink)`
	padding: 1em;
	width: 100%;
	height: auto;
	cursor: pointer;
	text-decoration: none;
	color: black;
	&:hover {
		background-color: var(--light-gray);
	}
`

export const Text = styled.p`
	padding: 1em;
`

export const Item = styled.div<{ center?: boolean }>`
	padding: 1em;
	width: 100%;
	height: auto;
	cursor: pointer;
	text-decoration: none;
	color: black;
	text-align: ${({ center }) => (center ? 'center' : 'left')};
	&:hover {
		background-color: var(--light-gray);
	}
`
