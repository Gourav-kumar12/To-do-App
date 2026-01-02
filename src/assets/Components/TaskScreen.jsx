import React, { useRef } from 'react'
import Input from "./Input.jsx"
import toast from 'react-hot-toast';


const TaskScreen = ({onAdd,cancelButton}) => {

  //useref ka use ek new state me value store ke liye kr rhe h
  const title = useRef()
  const description= useRef()
  const date= useRef()

  function handleSave(){
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDate = date.current.value

    //validation
    if (
    enteredTitle.trim() === '' ||
    enteredDescription.trim() === '' ||
    enteredDate.trim() === ''
      ) {
        toast.error('Please fill all fields ❌');
    return;
      }

    onAdd({
    title: enteredTitle,
    description: enteredDescription,
    date: enteredDate,

  })
    toast.success('Task added successfully ✅');
  }


  return (
    <div className='w-[35rem] mt-5'>
        <h1 className='font-bold font-mono text-center p-2 bg-pink-200 rounded-md shadow-sm w-1/2'>Add New task</h1>
        <menu className='flex items-center justify-end gap-4 '>
            <li><button className='hover:bg-gray-300 font-mono font-medium px-2 py-1 rounded-md' 
           onClick={cancelButton} > cancel</button></li>
            <li><button className='bg-blue-300 hover:text-red-950 font-mono font-medium px-2 py-1 rounded-md'
            onClick={handleSave} > save</button></li>
        </menu>
        
        <div >
            <Input ref={title} className='bg-gray-200 hover:bg-slate-400 p-1 text-black focus:border-gray-500 rounded-sm'
             label="Title"></Input>
            <Input ref={description} className='bg-gray-200 hover:bg-slate-400 p-1 text-black focus:border-gray-500 rounded-sm' 
            label="Description" 
            textarea></Input>
            <Input type="date" ref={date} className='bg-gray-200 hover:bg-slate-400 p-1 text-black focus:border-gray-500 rounded-sm' 
            label="Date"></Input>
        </div>
    </div>
  )
}

export default TaskScreen