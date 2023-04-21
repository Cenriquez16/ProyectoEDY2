import React from "react";
import useForm from "../../hooks/useForm";
import useTask from "../../hooks/useTask";
import classes from "./TaskAdd.module.css";
const TaskAdd = ({ handleNewTask }) => {
  const { description, day, time, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const {
    deleteAllHandler
  } = useTask();

  const times = [];
    for (let i=0; i < 24; i++) {
      for (let j=0; j < 4; j++) {
        times.push(`${i}:${j === 0  ? `00 H` : 15*j+'M'}`);
      }
    }
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const onFormAddSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTask = {
      id: new Date().getTime(),
      description: description,
      time: time,
      day: day,
      done: false,
    };
    handleNewTask(newTask);
    console.log(newTask)

    onResetForm();
  };

  return (
    <form onSubmit={onFormAddSubmit}>
      <div className={classes.controls}>
        <div>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onInputChange}
            placeholder="Ingrese aqui el texto"
            className={classes.input}
          />

          <input list="data" className={classes.input} placeholder='Search Day'  name="day" value={day} onChange={onInputChange}/>
          <datalist id="data" >
            {days.map((op, i) => (
              <option key={i}>{op}</option>
            ))}
          </datalist>

          <input list="time" className={classes.input} placeholder='Search time'  name="time" value={time} onChange={onInputChange}/>
          <datalist id="time" >
            {times.map((t, i) => (
              <option key={i}>{t}</option>
            ))}
          </datalist>
          {/* <input type="text" className={classes.input} name="time" value={time} onChange={onInputChange}></input> */}
        </div>
        <div className={classes.buttons_group}>
          <button type="submit" className={classes.button_add}>
            {" "}
            + Add to calendar{" "}
          </button>
          <button className={classes.button_delete} onClick={() => deleteAllHandler()}>- Delete alls</button>
        </div>
      </div>
    </form>
  );
};

export default TaskAdd;
