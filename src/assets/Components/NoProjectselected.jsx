import image from '../Components/image/no-projects.png'
import Button from "./Button.jsx"

const NoProjectselected = ({onStarted}) => {
  return (
    <div className='text-center w-2/3 mt-24 '>
        <img className='w-16 h-16 object-contain mx-auto' src={image} alt="no task add" />
        <h2 className='text-stone-600 text-xl font-bold font-mono my-2'>No Project Selected</h2>
        <p className='text-stone-400'>Select a project and get started with work</p>
        <Button onClick={onStarted} >Add Task</Button>
    </div>
  )
}

export default NoProjectselected