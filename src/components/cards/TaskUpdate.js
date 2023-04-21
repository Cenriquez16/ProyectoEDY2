import { useRef, useState } from 'react';
import React from 'react'
import useForm from '../../hooks/useForm'
import Button from '../UI/Button';
import classes from "./TaskAdd.module.css";

const TaskUpdate = ({task, handleUpdateTask, handleDeleteTask}) => {

    const {updateDescription, onInputChange} = useForm({
        updateDescription: task.description
    });

    const [disabled, setDisable] = useState(true);
    const inputRef = useRef();

    const onSubmitUpdate = e => {
        e.preventDefault();

        const id = task.id
        const description = updateDescription;

        handleUpdateTask(id, description);

        setDisable(!disabled)
        console.log(disabled)

        inputRef.current.focus();
    }


  return (

    <form onSubmit={onSubmitUpdate} className={classes.form} >
        <textarea  
            type='text'
            name='updateDescription'
            value={updateDescription}
            onChange={onInputChange}
            placeholder='Ingrese aqui el texto'
            readOnly={disabled}
            ref = {inputRef}
            className={classes.input_add}
        />
        <button type='submit' className={classes.button_update}> + </button>
      
    </form>

  )
}

export default TaskUpdate