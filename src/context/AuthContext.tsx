import React from 'react'

export type AuthData = null | {
	accessToken: string
	username: string
	id: number
	avatarPath: string
}

type AuthContextType = {
	auth: AuthData
	setAuth: React.Dispatch<React.SetStateAction<AuthData>>
}

const AuthContext = React.createContext<AuthContextType>({
	auth: null,
	setAuth: () => {},
})

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [auth, setAuth] = React.useState<AuthData>(null)

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
