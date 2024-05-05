"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Trash } from 'lucide-react'
import { useModal } from '@/hooks/use-modal'

const DeleteButton = ({url,message,modal}) => {

   // This component make the delete dialog to appear
  // useModal() hook is the hook that handle dialogs
  
  const {onOpen} = useModal()
  const data = {
    url,
    message
  }
  return (
    <Button className="danger-button" onClick={()=>{onOpen(modal,data)}}>
        <Trash className='w-4 h-4'/>
    </Button>
  )
}

export default DeleteButton