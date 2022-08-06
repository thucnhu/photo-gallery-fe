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

export type AllPicturesProps = {
	all: PictureProps[]
	following: PictureProps[]
	subscribed: PictureProps[]
	trending: PictureProps[]
}

export type PictureProps = {
	id: number
	caption: string
	description: string
	img_path: string
	username?: string
	likes_count: number
	comments_count: number
}

export type PicCardProps = {
	id: number
	src: string
	description: string
	likes_count: number
	comments_count: number
}

export type TopicType = {
	id: number
	name: string
	posts_count: number
	avatar_path: string
}
