import { Modal, Popup } from '../../'

type Props = {
	handleDelete: () => void
	handleCancel: (type: 'delete') => void
}

const DeletePopup = ({ handleDelete, handleCancel }: Props) => {
	return (
		<Modal>
			<Popup center>
				<Popup.Text>Are you sure you want to delete?</Popup.Text>
				<Popup.Item center onClick={handleDelete}>
					OK
				</Popup.Item>
				<Popup.Item center onClick={() => handleCancel('delete')}>
					Cancel
				</Popup.Item>
			</Popup>
		</Modal>
	)
}

export default DeletePopup
