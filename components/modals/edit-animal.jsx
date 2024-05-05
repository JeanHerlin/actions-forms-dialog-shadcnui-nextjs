"use client"

import { useModal } from '@/hooks/use-modal'
import React, { useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Label } from '../ui/label'

const EditAnimal = () => {
    const router = useRouter()
    const {type,isOpen,onClose,data} = useModal()
    const { register, handleSubmit,reset, formState: { isSubmitting,errors },setValue } = useForm();
    const isModalOpen = isOpen && type==="editAnimal"
    
    const handleCLose = ()=>{
        reset()
        onClose()
    }

    const onSubmit = async (data)=>{
        // here is the onSubmit action, "POST,PUT..."
        
        console.log(data)
        router.refresh()
        reset()
      }

    useEffect(()=>{
        if(data){
            setValue('name',data.name)
            setValue('weight',data.weight)
            setValue('age',data.age)
            setValue('production',data.production)
            setValue('category',data.category)
            setValue('health',data.health)
            setValue('sexe',data.sexe)
            setValue('origin',data.origin)
        }
    },[data])
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleCLose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add animal</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <Label htmlFor="name">Name</Label>
                    <Input name="name" type="text" 
                    placeholder="Nom..."
                    {...register('name', { required: 'Please enter the name!'})}/>
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                    <Label htmlFor="poduction">Production</Label>
                    <select name="poduction" 
                        {...register('production', { required: 'Please select production!'})}
                    >
                        <option value="">select production..</option>
                        <option value="Milk">Milk</option>
                        <option value="Egg">Egg</option>
                    </select>
                    {errors.production && <span className="error">{errors.production.message}</span>}
                </div>
                <div className="form-group">
                    <Label htmlFor="category">Category</Label>
                    <select name="category" 
                        {...register('category', { required: 'Please select category!'})}
                    >
                        <option value="">select category..</option>
                        <option value="Ox">Ox</option>
                        <option value="Sheep">Sheep</option>
                    </select>
                    {errors.category && <span className="error">{errors.category.message}</span>}
                </div>
                <div className="form-group">
                    <Label htmlFor="health">Health</Label>
                    <select name="health" 
                        {...register('health', { required: 'Please select health!'})}
                    >
                        <option value="">select health..</option>
                        <option value="Fine">Fine</option>
                        <option value="Sick">Sick</option>
                    </select>
                    {errors.health && <span className="error">{errors.health.message}</span>}
                </div>
                <div className='display flex gap-3 w-full'>
                    <div className="form-group">
                        <Label htmlFor="age">Age</Label>
                        <Input name="age" type="text" 
                        placeholder="age..."
                        {...register('age', { required: 'Please enter the age!'})}/>
                        {errors.age && <span className="error">{errors.age.message}</span>}
                    </div>
                    <div className="form-group">
                        <Label htmlFor="weight">Weight</Label>
                        <Input name="weight" type="text" 
                        placeholder="weight..."
                        {...register('weight', { required: 'Please enter the weight!'})}/>
                        {errors.weight && <span className="error">{errors.weight.message}</span>}
                    </div>
                    <div className="form-group">
                        <Label htmlFor="sexe">Sexe</Label>
                        <select name="sexe" 
                            {...register('sexe', { required: 'Please select sexe!'})}
                        >
                            <option value="">select sex..</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.sexe && <span className="error">{errors.sexe.message}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <Label htmlFor="origine">Origin</Label>
                    <Input name="origin" type="text" 
                    placeholder="origin..."
                    {...register('origin', { required: 'Please enter the origin!'})}/>
                    {errors.origin && <span className="error">{errors.origin.message}</span>}
                </div>
            <Button type="submit" className="primary-button">Register</Button>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default EditAnimal