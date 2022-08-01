import React, { useEffect, useRef } from 'react'

export default function useClickOutside(handler: () => void) {
	const clickRef = useRef()

	// function handleClickOutside(e: React.ChangeEvent<HTMLInputElement>) {
	// 	if (clickRef !== undefined) {
	// 		if (!clickRef.current.contains(e.target)) handler()
	// 	}
	// }

	// useEffect(() => {
	// 	document.addEventListener('mousedown', handleClickOutside, true)
	// 	return () => {
	// 		document.removeEventListener('mousedown', handleClickOutside, true)
	// 	}
	// }, [])

	return clickRef
}
