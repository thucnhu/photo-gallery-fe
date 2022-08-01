import { useState } from 'react'

export default function useToggle() {
	const [isToggled, setIsToggled] = useState(false)

	function toggle() {
		setIsToggled(!isToggled)
	}

	return { isToggled, toggle }
}
