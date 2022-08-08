import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import {
	Container,
	InnerLeft,
	InnerRight,
	Logo,
	Menu,
	MenuItem,
	SearchBar,
	SearchInput,
	Profile,
	Avatar,
} from './header'
import { Popup } from '../../components'
import logo from '../../images/zalopay_logo.svg'
import { HOME, UPLOAD, LOG_IN, SIGN_UP, TOPICS } from '../../constants/routes'
import useClickOutside from '../../hooks/useClickOutside'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const clickRef = useClickOutside(() => setIsOpen(false))
	const { auth, setAuth } = useContext(AuthContext)
	const navigate = useNavigate()

	function handleLogout() {
		localStorage.removeItem('auth')
		setAuth(null)
		navigate(LOG_IN)
		window.location.reload()
		setIsOpen(false)
	}

	function handleToProfile() {
		navigate('/' + auth?.username)
		setIsOpen(false)
	}

	function handleToUpload() {
		navigate(UPLOAD)
		setIsOpen(false)
	}

	return (
		<Container>
			<InnerLeft>
				<Logo src={logo} />
				<Menu>
					<MenuItem to={HOME}>Home</MenuItem>
					<MenuItem to={UPLOAD}>Upload</MenuItem>
					<MenuItem to={TOPICS}>Explore</MenuItem>
				</Menu>
			</InnerLeft>
			<InnerRight>
				<SearchBar>
					<SearchInput
						placeholder='Search'
						type='text'
						name='search'
						onChange={e => setSearchValue(e.target.value)}
						value={searchValue}
					/>
				</SearchBar>

				<div ref={clickRef}>
					{auth ? (
						<Profile onClick={() => setIsOpen(!isOpen)}>
							<Avatar src={auth?.avatar_path} alt='avatar' />
							<p>{auth?.username}</p>
						</Profile>
					) : (
						<Menu>
							<MenuItem to={LOG_IN}>Log In</MenuItem>
							<MenuItem to={SIGN_UP}>Sign Up</MenuItem>
						</Menu>
					)}
					{isOpen && (
						<Popup>
							<Popup.Item onClick={handleToProfile}>Profile</Popup.Item>
							<Popup.Item onClick={handleToUpload}>Upload</Popup.Item>
							<Popup.Item onClick={handleLogout}>Log out</Popup.Item>
						</Popup>
					)}
				</div>
			</InnerRight>
		</Container>
	)
}

export default Header
