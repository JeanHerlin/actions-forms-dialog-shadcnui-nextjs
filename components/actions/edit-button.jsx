"use client"

import React from 'react'
import { Button } from '../ui/button'
import { PenBox } from 'lucide-react'
import { useModal } from '@/hooks/use-modal'

const EditButton = ({modal,data}) => {

   // This component make the edit dialog to appear
  // useModal() hook is the hook that handle dialogs
  
  const {onOpen} = useModal()
  return (
    <Button className="success-button" onClick={()=>{onOpen(modal,data)}}>
        <PenBox className='w-4 h-4'/>
    </Button>
  )
}

export default EditButton