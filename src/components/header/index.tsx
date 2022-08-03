import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import {
	Container,
	Inner,
	InnerLeft,
	InnerRight,
	Logo,
	Menu,
	MenuItem,
	Popup,
	PopupItem,
	SearchBar,
	SearchInput,
	Profile,
	Avatar,
} from './header'
import logo from '../../images/zalopay_logo.svg'
import { HOME, UPLOAD, LOG_IN } from '../../constants/routes'
import useClickOutside from '../../hooks/useClickOutside'

const Header: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const clickRef = useClickOutside(() => setIsOpen(false))
	const { auth } = useContext(AuthContext)

	return (
		<Container>
			<Inner>
				<InnerLeft>
					<Logo src={logo} />
					<Menu>
						<MenuItem to={HOME}>Home</MenuItem>
						<MenuItem to={UPLOAD}>Upload</MenuItem>
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
					<Profile onClick={() => setIsOpen(!isOpen)}>
						<Avatar src='https://i.pravatar.cc/300' alt='profile' />
						<p>{auth?.username}</p>
					</Profile>
					{isOpen && (
						<Popup ref={clickRef}>
							{auth && (
								<PopupItem to={'/' + auth.username}>Profile</PopupItem>
							)}
							<PopupItem to={UPLOAD}>Upload</PopupItem>
							<PopupItem to={LOG_IN}>Log out</PopupItem>
						</Popup>
					)}
				</InnerRight>
			</Inner>
		</Container>
	)
}

export default Header
