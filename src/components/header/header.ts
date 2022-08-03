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
	justify-content: center;
	align-items: center;
	z-index: 100;
`

export const Inner = styled.div`
	width: 95vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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
`

export const Menu = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-left: 2rem;
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
	margin-right: 1rem;
	text-decoration: none;
	@media (max-width: 770px) {
		display: none;
	}
	transition: all 0.35s ease-in-out;
`

export const SearchBar = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 770px) {
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

export const Popup = styled.div`
	transition: all 0.35s ease-in-out;
	width: 120px;
	height: auto;
	background-color: white;
	border-radius: 8px;
	box-shadow: var(--shadow-lg);
	position: absolute;
	top: 67px;
	right: 7px;
	display: flex;
	flex-direction: column;
	padding: 0.5em 0;
	font-size: 0.9rem;
`

export const PopupItem = styled(NavLink)`
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
