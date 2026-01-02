import React, { useState } from 'react'
import LeftSideMenu from './assets/Components/LeftSideMenu'
import TaskScreen from './assets/Components/TaskScreen'
import NoProjectselected from './assets/Components/NoProjectselected'
import ShowTask from './assets/Components/ShowTask'
import { Toaster } from 'react-hot-toast';



const App = () => {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId : undefined,
    projects:[]
  })
  //new project and task ke data ko store 
  function handleStartAdd(){
    setProjectsState(prevState =>{
      return {
        ...prevState,
        selectedProjectId :null,
      }
    })
  }
  //add new project and save
  function handleAddProject(projectData){
    setProjectsState((prevState) =>{
      const projectId =Math.random()
      const newProject = {
          ...projectData,
          id:projectId
      }
      return{
        //phle wala data array me restore kr ke use ...spreead operater 
        //add new project on this array
        ...prevState,
        selectedProjectId :undefined,
        projects : [...prevState.projects, newProject]
        };
    })
  }

 //cancel button function
  function handleCancelButton(){
    setProjectsState((prevState) =>{
      return{
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  //select krne ke liye leftSideMenu me button pr click kr ke 
  //show data 
  function handleSelectProject(id) {
  setProjectsState((prevState) => {
    return {
      ...prevState,
      selectedProjectId: id,
    };
  });
}

//function delete button 
function handleDelete(){
  setProjectsState((prevState) =>{
    return{
      ...prevState,
       projects: prevState.projects.filter(
        (project) => project.id !== projectsState.selectedProjectId
      ),
    }
  })
  toast.success('Task deleted successfully 🗑️');
}

//isme check if list of project leftsidebar is same projectsState so 
//show 
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

   
  // console.log(projectsState)
  //condition which screen show

  let content;

if (projectsState.selectedProjectId === null) {
  content = <TaskScreen onAdd={handleAddProject} cancelButton={handleCancelButton} />;
} 
else if (projectsState.selectedProjectId === undefined) {
  content = <NoProjectselected onStarted={handleStartAdd} />;
} 
else if (selectedProject) {
  content = <ShowTask selectedProject={selectedProject} onDelete={handleDelete}/>
}

  return (
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <main className="flex h-screen my-8 gap-8">
      <LeftSideMenu
        onStarted={handleStartAdd}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  </>
)
}

export default App