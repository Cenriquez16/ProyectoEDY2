import useTask from "../../hooks/useTask";
import classes from "./Contain.module.css";
import ListTask from "./ListTask";
import TaskAdd from "./TaskAdd";
import imgBack from '../../assets/backgroun_dash.jpg'

import Button from "../UI/Button";
// import Toast from '../UI/Toast';

import { useState, useEffect } from "react";

const Contain = (props) => {
 
  const {
    tasks,
    taskCount,
    pendingTaskCount,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask
  } = useTask();
  
 const [taskAct, setTaskACt] = useState(tasks)
 const [pendingDay, setPendingDay] = useState([]) 

  const handleFilterTask = (props) => {
    const taskAct = tasks.filter(t => t.day === props)
    
    setTaskACt(taskAct)
  }


 
  useEffect(() => {
    setTaskACt(taskAct)
    setPendingDay(taskAct.map(taskAct => !taskAct.done).length)
  }, [taskAct])
  

  return (
    <div className={classes.main}>
      <div style={{margin:'10px'}}>
        <TaskAdd handleNewTask={handleNewTask} />
      </div>

      <div className={classes.buttons_group}>
        <Button name='monday'  onClick={() => handleFilterTask('monday')}>Monday</Button>
        <Button name='tuesday' onClick={() => handleFilterTask('tuesday')}>Tuesday</Button>
        <Button name='wednesday'  onClick={() => handleFilterTask('wednesday')}>Wednesday</Button>
        <Button name='thursday'  onClick={() => handleFilterTask('thursday')}>Thursday</Button>
        <Button name='friday'  onClick={() => handleFilterTask('friday')}>Friday</Button>
        <Button name='saturday'  onClick={() => handleFilterTask('saturday')}>Saturday</Button>
        <Button name='sunday'  onClick={() => handleFilterTask('sunday')}>Sunday</Button>
      </div>
      <div className={classes.info_div}>
        <div >
          <h3>Time</h3>
        </div>
        <div className={classes.info_div}>
          <h3>Pending Task total: {pendingTaskCount}</h3>
        </div>
        <div className={classes.info_div}>
            <h3>Task count: {taskCount}</h3>
        </div>
        <div className={classes.info_div}>
          <h3>count task day: {taskAct.length}</h3>
        </div>
        <div className={classes.info_div}>
          <h3>Pending day: {pendingDay}</h3>
        </div>
      </div>

      <div>
        <ListTask
          tasks={taskAct}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      </div>
    </div>
  );
};
export default Contain;
