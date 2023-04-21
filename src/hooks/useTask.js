import { useEffect, useReducer } from "react";
import taskReducer from "../taskreducer";

export const useTask = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  }

  const [tasks, dispatch] = useReducer(taskReducer, initialState, init);

  const taskCount = tasks.length ;

  const pendingTaskCount = tasks.filter(task => task.done).length;

//  console.log(init)

 

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const deleteAllHandler = () => {
    const action = {
      type: 'REMOVE_TASKS',
      payload: 'remove'
  };
  dispatch(action);
}


  const handleNewTask = task => {
    const action = {
        type: 'ADD_TASK',
        payload: task
    };
    dispatch(action);
  }
// debugger
  const handleFilterTask = day => {
    const action = {
        type: 'FILTER_TASKS',
        payload: day
    };
    dispatch(action);
  }


  const handleDeleteTask = id => {
    const action = {
        type: 'DELETE_TASK',
        payload: id
    };

    dispatch(action);
  };

  const handleCompleteTask = id => {
    const action = {
        type: 'COMPLETE_TASK',
        payload: id
    };
    dispatch(action);
  }

  const handleUpdateTask =(id, description) => {
    const action = {
        type: 'UPDATE_TASK',
        payload: {
            id,
            description
        }
    };
    dispatch(action);
  }

  return{
    tasks,
    taskCount,
    pendingTaskCount,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask,
    deleteAllHandler,
    handleFilterTask,
  }
}

export default useTask;