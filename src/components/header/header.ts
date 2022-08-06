import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
	width: 100vw;
	height: 60px;
	box-shadow: var(--shadow-md);
	background-color: white;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
	padding: 0 2.5vw;
`

export const InnerLeft = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`

export const InnerRight = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`

export const Logo = styled.img`
	height: 30px;
	margin-right: 1.5rem;
`

export const Menu = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	@media (max-width: 530px) {
		display: none;
	}
`

export const MenuItem = styled(NavLink)`
	&.active {
		color: white;
		background-color: var(--blue);
	}
	color: black;
	padding: 0.5em 1em;
	font-size: 0.95rem;
	border-radius: 6px;
	margin-right: 0.5rem;
	text-decoration: none;
	/* @media (max-width: 770px) {
		display: none;
	} */
	transition: all 0.35s ease-in-out;
`

export const SearchBar = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 1rem;

	@media (max-width: 850px) {
		display: none;
	}
`

export const SearchInput = styled.input`
	background-color: var(--gray);
	padding: 1em;
	border: none;
	border-radius: 8px;
	width: 300px;
	height: 40px;
`

export const Profile = styled.div`
	display: flex;
	margin-left: 2rem;
	cursor: pointer;
	align-items: center;
`

export const Avatar = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin-right: 0.5rem;

	:hover {
		outline: 3.5px solid var(--light-gray);
		box-shadow: var(--shadow);
	}
`
