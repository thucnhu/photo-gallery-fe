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
	SearchBar,
	SearchInput,
	Profile,
} from './header'
import logo from '../../images/zalopay_logo.svg'
import { HOME, UPLOAD } from '../../constants/routes'

const Header: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')

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
					<Profile>Profile</Profile>
				</InnerRight>
			</Inner>
		</Container>
	)
}

export default Header
