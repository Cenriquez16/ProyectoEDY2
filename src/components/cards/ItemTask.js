
import TaskUpdate from "./TaskUpdate";
import classes from './TaskAdd.module.css'
import Card from "../UI/Card";

const ItemTask = ({task, handleUpdateTask, handleDeleteTask,handleCompleteTask}) => {
    return (
        <div className={classes.li}>

            <div  className={classes.hour}>
                <h4 >{task.time}</h4>
            </div>
            <Card>   

                <li className={classes.container_done}>

    
                    <div className={classes.form}>
                        <span onClick={() => handleCompleteTask(task.id)} 
                        className={classes.span}
                        >
                            <label className={` ${task.done ? classes.done_task : classes.done_task_active}`}>
                                </label>  
                        </span>
                    </div>
                    <div className={classes.form}>
                        <TaskUpdate task={task} handleUpdateTask={handleUpdateTask} />
                        <button type="submit" onClick={() => handleDeleteTask(task.id)}  className={classes.button_delete_single}> -</button>
                    </div>
            </li>
            </Card>
        </div>
    )
};
export default ItemTask;