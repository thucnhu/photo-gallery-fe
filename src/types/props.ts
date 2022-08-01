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

export type Picture = {
	id: number
	caption: string
	description: string
	img_path: string
	username: string
}

export type PicCardProp = {
	id: number
	src: string
	description: string
	likes: string
	comments: string
}
