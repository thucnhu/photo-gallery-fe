import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
	transition: all 0.35s ease-in-out;
	width: 120px;
	height: auto;
	background-color: white;
	border-radius: 8px;
	box-shadow: var(--shadow-lg);
	position: absolute;
	top: 65px;
	right: 5px;
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

export const Item = styled.div`
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
