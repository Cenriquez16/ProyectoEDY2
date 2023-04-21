import classes from './Action.module.css'

import useTask from '../hooks/useTask';
import TaskAdd from './cards/TaskAdd';
import taskReducer from '../taskreducer';
import { useReducer, useEffect } from 'react';
import Contain from './cards/Contain';

const Action = (props) => {




    const onAddHandler = async (e) => {
        e.preventDefault();
        // if (!formIsValid) {
        //   return;
        // }
        // try {
        //   const user = await LoginServices.login({
        //     emailValue, 
        //     passwordValue
        //   })
        //   localStorage.setItem("email", emailValue);
        //   localStorage.setItem("email", passwordValue)
        //   setUser(user);
        //   resetPasswordInput();
        //   resetEmailInput();
        // } catch (error) {
        //   setErrorMenssage('Wrong Credentials');
        //   setTimeout(() => {
        //     setErrorMenssage(null);
        //   }, 5000)
        // }
        // localStorage.setItem("email", emailValue);
        //   localStorage.setItem("password", passwordValue)
       
      };
      const {
        tasks,
        taskCount,
        pendingTaskCount,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
        } = useTask();

        console.log(tasks)

    return(
        <div >
            <div className={classes.action}>
            <section>
                <form onSubmit={onAddHandler}>
                    {/* <input type='text'></input>
                    <select name="select" defaultValue='monday'>
                        <option value="monday">Monday</option>
                        <option value="tuesday" selected>Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
                    <input type='date'></input> */}
                </form>
                <div>
                <div>
                {/* <TaskAdd handleNewTask={handleNewTask} /> */}
            </div>
                    {/* <button>ADD</button>
                    <button>DELETE</button> */}
                </div>
               

            </section>
            </div>
            {/* <div>
                <Contain taskAdd={tasks}/>
            </div> */}
            
        </div>
    )
}
export default Action;