"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { useModal } from '@/hooks/use-modal'

const AddButton = (props) => {

  // This component make the add dialog to appear
  // useModal() hook is the hook that handle dialogs

    const { modal } = props
    const {onOpen} = useModal()
  return (
    <Button className="primary-button" onClick={()=>{onOpen(modal); console.log(modal)}}>
        <Plus className='w-4 h-4'/> Add
    </Button>
  )
}

export default AddButton