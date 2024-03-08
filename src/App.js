import Header from './Componnent/Header'
import Tasks from './Componnent/Tasks'
import AddTask from './Componnent/AddTask'
import {useState} from 'react'
const App =() => {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks]=useState(
    [
      {
          id: 1,
          text:"Doctor Appointment",
          day: "Feb 5 at 2:30pm",
          reminder: true,
      },
      {
        id: 2,
        text:"Meeting at school",
        day: "Feb 5 at 2:30pm",
        reminder: true,
    },
    {
      id: 3,
      text:"Food Shopping",
      day: "Feb 5 at 2:30pm",
      reminder: false,
  }
      
  ]
  )
  //Add Taskd
const addTask =(task) => {
    const id=Math.floor(Math.random() *10000) +1
    const newTask={id, ...task}
    setTasks([...tasks,newTask])
    console.log(task)
  }
  // Delete tasks
const deleteTask=(id) => {
  setTasks(tasks.filter((tasks)=>tasks.id!==id));
}
// Toggle reminder
const toggleReminder=(id) => {
//  console.log("Toggle reminder")
  setTasks(
    tasks.map((task)=>
    task.id===id?{...task,reminder:
       !task.reminder} : task
       )
    )
}
  return (
    <div className="App">
    <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
   { showAddTask && <AddTask onAdd={addTask}/>}
    { tasks.length>0? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    ):("No Tasks To Show")
    }
    </div>
  );
}
export default App;
