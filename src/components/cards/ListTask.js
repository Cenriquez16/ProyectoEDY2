import ItemTask from "./ItemTask";
import classes from './TaskAdd.module.css'
import { useState, useEffect } from "react";

const ListTask = ({tasks, handleUpdateTask, handleDeleteTask,handleCompleteTask}) => {
    const [currentHour, setCurrentHour] = useState(new Date().getHours());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentHour(new Date().getHours());
      }, 1000);
      return () => clearInterval(interval);
    }, [])
   
    return(
        <ul className={classes.ul}>
            <div className={classes.line} 
            style={{ top: `${(currentHour / 24) * 100}%` }} 
            />
            {tasks.map(task => (
            <ItemTask 
                key={task.id}
                task={task}
                handleUpdateTask={handleUpdateTask}
                handleDeleteTask={handleDeleteTask}
                handleCompleteTask={handleCompleteTask}
            />
            ))}
            
        </ul>
    )
};
export default ListTask;