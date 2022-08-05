import React from 'react'

export type RestPropsWithChildren = React.PropsWithChildren & {
	[key: string]: any
}

export type FilterProps = 'all' | 'following' | 'subscribed' | 'trending'

export type ProfileCardProps = {
	username: string
	followers: number
	following: number
	posts: number
	is_followed?: boolean
	pictures: PictureProps[]
}

export type CommentProps = {
	id: number
	username: string
	text: string
	is_liked: boolean
	likes_count: number
	created_at: string
}

export type PictureProps = {
	id: number
	caption: string
	description: string
	img_path: string
	username?: string
}

export type PicCardProps = {
	id: number
	src: string
	description: string
	likes: string
	comments: string
}
