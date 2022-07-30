import React from 'react'

export type RestPropsWithChildren = React.PropsWithChildren & {
	[key: string]: any
}

export type Comment = {
	id: number
	username: string
	text: string
	created_at: string
}
