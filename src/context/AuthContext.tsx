import React from 'react'

type AuthData = {
	access_token: string
	username: string
	id: number
}

type AuthContextType = {
	auth: AuthData | undefined
	setAuth: React.Dispatch<React.SetStateAction<AuthData | undefined>>
}

const AuthContext = React.createContext<AuthContextType>({
	auth: undefined,
	setAuth: () => {},
})

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [auth, setAuth] = React.useState<AuthData>()

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
