import React from 'react'

const Input = ({label, textarea, ...props}) => {
  return (
    <div>
        <p className='flex flex-col gap-2 my-4'>
            <label >{label}</label>
            {textarea ? <textarea {...props} /> : <input {...props}/>}
        </p>
    </div>
  )
}

export default Input