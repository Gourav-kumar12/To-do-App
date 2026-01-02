import React from 'react'
import toast from 'react-hot-toast';


const ShowTask = ({selectedProject,onDelete}) => {

  return (
     <div className="w-[35rem] mt-4 h-1/2 bg-amber-200 rounded-md text-center flex 
      justify-evenly">
      <div className=' mt-5 '>
           <h1 className="text-2xl font-bold">{selectedProject.title}</h1>
            <p className="text-gray-600">{selectedProject.description}</p>
            <p className="text-sm text-gray-400">{selectedProject.date}</p>
      </div>
      <div className=' px-5 text-center mt-6'>
           <button onClick={onDelete}
            
           className='justify-end text-center text-stone-600 bg-pink-400 rounded-md shadow-sm border-white
           p-2'>Delete</button>
      </div>
    </div>
  )

}
  
export default ShowTask