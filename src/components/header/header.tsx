import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
	width: 100vw;
	height: 60px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	position: fixed;
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

export const MenuItem = styled(NavLink).attrs({ activeClassName: 'selected' })`
	&.${activeClassName} {
		color: white;
		background-color: #3388ff;
	}
	/* background-color: ${props => (props.isSelected ? '' : '#fff')};
	color: ${props => (props.isSelected ? 'white' : '#000')}; */
	padding: 0.5rem 1rem;
	border-radius: 6px;
	margin-right: 1rem;
	text-decoration: none;
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
	background-color: rgb(235, 235, 235);
	padding: 1rem;
	border: none;
	border-radius: 8px;
	width: 300px;
	height: 40px;
`

export const Profile = styled.div`
	display: flex;
	margin-left: 2rem;
`
