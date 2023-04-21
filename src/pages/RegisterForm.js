import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useInput from "../hooks/use-inputs";


import classes from "./Register.module.css";
import imgBack from '../assets/background.jpg'

import { singIn } from "../components/SignIn/Action";

const isNotEmpity = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isBirthDate = (value) => value.trim() !== "";
const isCountry = (value) => value.trim() !== "";
const isCity = (value) => value.trim() !== "";
const isPassword = (value) => value.trim() !== "";

const localSingUp = localStorage.getItem("token");

let userList = [];

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    entredValueHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpity);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    entredValueHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpity);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    entredValueHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);
  const {
    value: birthValue,
    isValid: birthIsValid,
    hasError: birthHasError,
    entredValueHandler: birthChangeHandler,
    inputBlurHandler: birthBlurHandler,
    reset: resetBirthInput,
  } = useInput(isBirthDate);
  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    entredValueHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput(isCountry);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    entredValueHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(isCity);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    entredValueHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isPassword);

  const {
    value: passwordConfirmValue,
    isValid: passwordConfirmIsValid,
    hasError: passwordConfirmHasError,
    entredValueHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
    reset: resetPasswordConfirmInput,
  } = useInput(isPassword);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    birthIsValid &&
    countryIsValid &&
    cityIsValid &&
    passwordIsValid &&
    passwordConfirmIsValid
  ) {
    if (passwordValue === passwordConfirmValue ){
      formIsValid = true;
    }
    
  }

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const birthClasses = birthHasError ? "form-control invalid" : "form-control";

  const countryClasses = countryHasError
    ? "form-control invalid"
    : "form-control";

  const cityClasses = cityHasError ? "form-control invalid" : "form-control";

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetBirthInput();
    resetCountryInput();
    resetCityInput();
    resetPasswordInput();
    resetPasswordConfirmInput();
    let newUser = {
      email: emailValue,
      password: passwordValue,
      token: emailValue,
      city: cityValue,
    };

    let register = {
      
        firstName: firstNameValue,
        lastName:lastNameValue ,
        birthDate: birthValue,
        city: cityValue,
        country: countryValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: passwordConfirmValue
    };

    userList.push(newUser);

    singIn(register);

    localStorage.setItem("newUser", JSON.stringify(newUser));
    navigate("/login");
    // console.log(localSingUp);
    // console.log(newUser);
  };

  const [showDash, setShowDash] = useState(false);

  useEffect(() => {
    if (localSingUp) {
      setShowDash(true);
    }
  }, []);

  // console.log(showDash);

  return (
    <div className={classes.main}>
      <div className={classes.contentBox}>
        <div className={classes.formBox}>
          <form onSubmit={onSubmitHandler}>

              <div className={classes.inputBox}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={firstNameValue}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameHasError && (
                 <div className={classes.error_text}> <p >Nombre inválido.</p> </div>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastNameValue}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameHasError && (
                 <div className={classes.error_text}> <p >Apellido inválido.</p> </div>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={emailValue}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                {emailHasError && <div className={classes.error_text}> <p>Correo electrónico inválido.</p> </div>}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="birth">Fecha de nacimiento</label>
                <input
                  type="date"
                  id="birth"
                  value={birthValue}
                  onChange={birthChangeHandler}
                  onBlur={birthBlurHandler}
                />
                {birthHasError && (
                  <div className={classes.error_text}> <p>Fecha de nacimiento inválida.</p> </div>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="country">País</label>
                <input
                  type="text"
                  id="country"
                  value={countryValue}
                  onChange={countryChangeHandler}
                  onBlur={countryBlurHandler}
                />
                {countryHasError && (
                  <div className={classes.error_text}> <p>País inválido.</p> </div>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  value={cityValue}
                  onChange={cityChangeHandler}
                  onBlur={cityBlurHandler}
                />
                {cityHasError && <div className={classes.error_text}> <p >Ciudad inválida.</p> </div>}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={passwordValue}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                {passwordHasError && (
                  <div className={classes.error_text}> <p>Contraseña inválida.</p> </div>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="passwordC">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="passwordC"
                  value={passwordConfirmValue}
                  onChange={passwordConfirmChangeHandler}
                  onBlur={passwordConfirmBlurHandler}
                />
                {passwordValue !== passwordConfirmValue && (
                  <div className={classes.error_text}> <p>Contraseña no coincide</p> </div>
                )}
              </div>
              <div className={classes.inputBox}>
                <button disabled={!formIsValid} >
                  Registrarse
                </button>
                <button > <Link to='/login'>Iniciar sesión </Link></button>
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

export default RegisterForm;
