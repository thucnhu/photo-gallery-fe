import React, { useState } from 'react'
import { Container, Button, Input, PrimaryButton } from './form'

const Form: React.FC<{ type: string }> = ({ type }) => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	return (
		<Container>
			<Input
				placeholder='Username'
				name='username'
				value={username}
				type='text'
				onChange={e => setUsername(e.target.value)}
			/>
			<Input
				placeholder='Password'
				name='password'
				value={password}
				type='text'
				onChange={e => setPassword(e.target.value)}
			/>
			{type === 'login' && (
				<PrimaryButton type='submit'>Login</PrimaryButton>
			)}
			{type === 'signup' && <Button type='submit'>Register</Button>}
		</Container>
	)
}

export default Form
