import { Popup } from '../..'

type Props = {
	handleClickEdit: () => void
	handleClickDelete: () => void
}

const MainPopup = ({ handleClickEdit, handleClickDelete }: Props) => {
	return (
		<Popup>
			<Popup.Item onClick={handleClickEdit}>Edit picture</Popup.Item>
			<Popup.Item onClick={handleClickDelete}>Delete picture</Popup.Item>
		</Popup>
	)
}

export default MainPopup
