import React from 'react'
import AddAnimal from '../modals/add-aniaml'
import DeleteConfirm from '../modals/delete-confirm'
import EditAnimal from '../modals/edit-animal'

const ModalProvider = () => {
  return (
    <>
        <AddAnimal/>
        <DeleteConfirm/>
        <EditAnimal/>
    </>
  )
}

export default ModalProvider