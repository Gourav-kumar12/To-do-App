import { Key } from "lucide-react"
import Button from "./Button.jsx"

const LeftSideMenu = ({onStarted,projects,onSelectProject}) => {
    
  return (
   <>
   <aside className='w-1/4 bg-blue-200 m-2 border-x-gray-600 p-2  md:w-72 rounded-md '>
    <div className="text-center" >
        <h1 className='text-xl py-4 text-center justify-center font-mono font-bold underline'>Task</h1>
        <Button onClick={onStarted} >Add Task</Button>
    </div>
    <ul>
        {projects.map(project  =>(
            <li key={project.id}>
                <button className="bg-pink-500 rounded-md mt-6 w-full py-2 hover:bg-slate-400 "
                onClick={() => onSelectProject(project.id)}>{project.title}</button>
            </li>
        ))}
    </ul>
   </aside>
   </>
  )
}

export default LeftSideMenu