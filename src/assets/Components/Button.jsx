import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <div>
        <button className='bg-red-200 text-stone-800 font-bold  hover:bg-amber-500 hover:drop-shadow-xl
         p-2 mt-4 rounded-md ' 
        {...props}>
            {children}
        </button>
    </div>
  )
}

export default Button