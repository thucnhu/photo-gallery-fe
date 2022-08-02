import { useState } from 'react'

export default function useToggle(isLiked: boolean) {
	const [isToggled, setIsToggled] = useState(isLiked)

	function toggle() {
		setIsToggled(!isToggled)
	}

	return { isToggled, toggle }
}
