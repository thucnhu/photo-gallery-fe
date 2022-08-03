import { createRef, useEffect } from 'react'

export default function useClickOutside(handler: () => void) {
	const clickRef = createRef<HTMLInputElement>()

	function handleClickOutside(e: Event) {
		if (clickRef.current && !clickRef.current.contains(e.target as Node)) {
			handler()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside, true)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside, true)
		}
	}, [clickRef])

	return clickRef
}
