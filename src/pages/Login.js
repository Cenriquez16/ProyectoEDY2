import { Fragment, useEffect, useState, useContext } from "react";
import useInput from "../hooks/use-inputs";
// import LoginServices from "../services/Login";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

import classes from './Login.module.css'
import imgBack from '../assets/background.jpg'
import AuthContext from "../components/store/auth-context";

import { SingUp } from "../components/SignIn/Action";

const isPassword = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");


const Login = (props) => {
  const [errorMenssage, setErrorMenssage] = useState(null);
  const [showDashboard, setShowDashboar] = useState(false)

  const authCtx = useContext(AuthContext);

  const storedUserList = localStorage.getItem("newUser")
    let userList = JSON.parse(storedUserList) || []
    const localToken = userList.token;
    const localPass = userList.password; 
    const localTokenUser = localStorage.getItem("tasks");

    console.log(storedUserList)

  // console.log(userList)
  let navigate = useNavigate();
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    entredValueHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isPassword);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    entredValueHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
    
  }

  const isLoged = authCtx.isLoged;


  const firstNameClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  // useEffect(() => {
      
  // }, [ navigate, isLoged])

  const onLoginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      
      return;
    }
    let data = {
      email: emailValue,
      password: passwordValue
    }

    SingUp(data)

    console.log(localTokenUser)

    if(localTokenUser){
      if(isLoged){
        console.log(isLoged)
        setShowDashboar(true)
        navigate('/dashboard')  
      }
    }
    
  };

  return (

      <div className={classes.main}>
        <div className={classes.contentBox}>   
        <div className={classes.formBox}>  
          <div>
            <h1>Bienvenido</h1>
            <h4>Si tiene una cuenta puede iniciar sesión</h4>
            <h2>Iniciar sesión</h2>
          </div>
          <form onSubmit={onLoginHandler} >
              
              <div className={classes.inputBox}>
                <input
                  type="text"
                  id="name"
                  value={emailValue}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                <span>
                <FaUser className={classes.logIcon}/>
                </span>
                {emailHasError && <div className={classes.error_text}> <p>Correo electrónico inválido</p>  </div>}
              </div>
              <div className={classes.inputBox}>
                <input
                  type="password"
                  id="password"
                  value={passwordValue}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                <span>
                <FaLock className={classes.lockIcon}/>
                </span>
                {passwordHasError && <div className={classes.error_text}> <p>Contraseña inválida </p> </div>}
              </div>
              
              <div className={classes.inputBox}>
                <button disabled={!formIsValid}  onChange={onLoginHandler}>Acceder</button>
               <button > <Link to='/register'> Inscribirse </Link></button>
              </div>
          </form>
          </div> 
          </div>
   

        <div className={classes.imgbox}>
          <img src={imgBack} alt='imagen of background to login'/>
        </div>
      </div>
      

  );
};

export default Login;