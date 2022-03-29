import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

function Register({handleSubmit, name, setName, password, setPassword, email, setEmail}) {
  const [errorName, setErrorName] = React.useState();
  const [errorEmail, setErrorEmail] = React.useState();
  const [errorPassword, setErrorPassword] = React.useState();
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);

  function handleNameChange(e) {
    setErrorName(e.target.validationMessage);
    setIsNameValid(e.target.checkValidity());
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setErrorEmail( e.target.validationMessage);
    setIsEmailValid(e.target.checkValidity());
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setErrorPassword(e.target.validationMessage);
    setIsPasswordValid(e.target.checkValidity());
    setPassword(e.target.value);
  }

  const NoActiveButton = (
    `${(isNameValid & isEmailValid  & isPasswordValid) ? '' : 'sign__button_no-active'}`
  );
  return (
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <fieldset className="sign__container">
            <Link to="/"  className="sign__image"><img src={logo} alt="логотип"/></Link>
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">Имя</span>
            <input type="text" className="sign__input" value={name || ''} onChange={handleNameChange} minLength="2" maxLength="30" required/>
            {!isNameValid ? <span className="sign__input-error sign__input-error_active">{errorName}</span> : ''}
            <span className="sign__description">E-mail</span>
            <input type="email" className="sign__input" value={email || ''} onChange={handleEmailChange} required pattern="^.+@.+\..+$"/>
            {!isEmailValid ? <span className="sign__input-error sign__input-error_active">{errorEmail}</span> : ''}
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" value={password || ''} onChange={handlePasswordChange} required minLength="6"/>
            {!isPasswordValid ? <span className="sign__input-error sign__input-error_active">{errorPassword}</span> : ''}
            <input type="submit" value="Зарегистрироваться" name="submit_button" className={`sign__button ${NoActiveButton}`} />
            <span className="sign__bottom">Уже зарегистрированы? <a href="/sign-in" className="sign__link">Войти</a></span>
          </fieldset> 
        </form>
      </div>
  )
};

export default Register;
