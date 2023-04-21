import { useState, useReducer } from "react";

const initialInputSatate = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT'){
    return {value: action.value, isTouched: state.isTouched};
  }
  if (action.type === 'BLUR'){
    return {isTouched: true, value: state.value};
  }
  if (action.type === 'RESET'){
    return {isTouched: false, value: ''}
  }
  return inputStateReducer
}

const useInput = (validateValue) => {

  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputSatate)

  // const [entredValue, setEnteredValue] = useState("");
  // const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const entredValueHandler = (e) => {
    dispatch({type:'INPUT', value: e.target.value});
    // setEnteredValue(e.target.value);
  };

  const inputBlurHandler = e =>{
    dispatch({type:'BLUR'});
    // setIsTouch(true);
  }

  const reset = () => {
    dispatch({type:'RESET'});
    // setEnteredValue('');
    // setIsTouch(false);
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    entredValueHandler,
    inputBlurHandler,
    reset
  };
};
export default useInput;
