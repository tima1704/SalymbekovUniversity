import React from 'react'
import { Button, Modal } from 'flowbite-react'

type GenericFunction<T = unknown> = (...args: T[]) => void;

interface IModalProps {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  onClick: GenericFunction
}

const DeleteModal = ({ openModal, setOpenModal, onClick }: IModalProps) => {
  return (
    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => {
              onClick()
              setOpenModal(false)
            }}>
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DeleteModal