import { useState } from "react";
import useInput from "../hooks/use-inputs";

const SimpleInput = (props) => {
  const {
    value: entredInput,
    isValid: isValidEntered,
    hasError: nameImputHasError,
    entredValueHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandrer,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: entredEmail,
    isValid: isValidEnteredEmail,
    hasError: emailImputHasError,
    entredValueHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandrer,
    reset: reseEmailInput
  } = useInput(value => value.includes("@"));
  //validacion con estados
  // const [entredInput, setEnteredInput] = useState("");
  // const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);

  // const isValidEntered = entredInput.trim() !== '' && enteredEmail.trim() !== '' ;
  // const nameImputInvalid = !isValidEntered && enteredNameTouch;

  // const enteredEmailIsvalid = enteredEmail.includes("@");
  // const emailImputInvalid = !enteredEmailIsvalid && enteredEmailTouch;

  let formIsValid = false;

  if (isValidEntered && isValidEnteredEmail) {
    formIsValid = true;
  }

  // const onBlurHandler = e =>{
  //   setEnteredEmailTouch(true)
  //   if(entredInput.trim() === '' || enteredEmail.trim() === ''){
  //   }

  // }

  // const nameInputHandler = (e) => {
  //   setEnteredInput(e.target.value);
  //   if(e.target.value.trim() !== ''){
  //   }
  // };

  // const emailInputHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  //   if (e.target.value.trim() !== "") {
  //   }
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // setEnteredNameTouch(true);
    // setEnteredEmailTouch(true);

    if (!isValidEntered) {
      return;
    }

    resetNameInput();
    // setEnteredInput("");
    // setEnteredNameTouch(false);

    reseEmailInput();
    // setEnteredEmail("");
    // setEnteredEmailTouch(false);
  };

  const validationField = nameImputHasError
    ? "form-control invalid"
    : "form-control";
  const validationFieldEmail = emailImputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={validationField}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandrer}
          value={entredInput}
        />
        {nameImputHasError && (
          <p className="error-text">La entrada es invalida</p>
        )}
      </div>
      <div className={validationFieldEmail}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandrer}
          value={entredEmail}
        />
        {emailImputHasError && (
          <p className="error-text">El e-mail es invalido</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
