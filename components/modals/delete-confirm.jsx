"use client"

import { useModal } from '@/hooks/use-modal'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import axios from 'axios'

const DeleteConfirm = () => {
    const router = useRouter()
    const {type,isOpen,onClose,data} = useModal()
    const isModalOpen = isOpen && type==="deleteModal"
    
    const handleCLose = ()=>{
        onClose()
    }

    const onDelete = async ()=>{
        //here is the delete action
        /*
         data:{
            url,
            message
         }
        */

        onClose()
      }
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleCLose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle className="text-center">Are you sure ?</DialogTitle>
            </DialogHeader>
            <DialogDescription>
                {data && data.message}
            </DialogDescription>
            <DialogFooter>
                <Button className="primary-button" onClick={handleCLose}>Cancel</Button>
                <Button className="danger-button" onClick={onDelete}>Confirm</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default DeleteConfirm