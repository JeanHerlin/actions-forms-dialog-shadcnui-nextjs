import React from 'react'
import AddButton from './actions/add-button'
import DeleteButton from './actions/delete-button'
import EditButton from './actions/edit-button'

function ActionsContainer() {
  return (
    <div className='flex gap-3'>
      <AddButton modal="addAnimal"/>
      <DeleteButton 
        modal="deleteModal" 
        message="Make sur that this item is gonna be removed from the inventor !"
        url="url-to-backend"
      />
      <EditButton
        modal="editAnimal"
        data={{
          name:"Name",
          age:"1",
          weight:"1",
          origin:"Mexico",
          production:"Milk",
          category:"Ox",
          sexe:"Male",
          health:"Fine",
        }}
      />
    </div>
  )
}

export default ActionsContainer