import React from 'react'
import '../Register/Register.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

function Login({handleSubmit, password, setPassword, email, setEmail, buttonText}) {
  const [errorEmail, setErrorEmail] = React.useState();
  const [errorPassword, setErrorPassword] = React.useState();
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);

  function handleEmailChange(e) {
    setErrorEmail(e.target.validationMessage);
    setIsEmailValid(e.target.checkValidity());
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setErrorPassword(e.target.validationMessage);
    setIsPasswordValid(e.target.checkValidity());
    setPassword(e.target.value);
  }

  const NoActiveButton = (
    `${(isEmailValid  & isPasswordValid) ? '' : 'sign__button_no-active'}`
  );

  return (
    <div className="page">
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <fieldset className="sign__container">
            <Link to="/" className="sign__image"><img src={logo} alt="логотип"/></Link>
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">E-mail</span>
            <input type="email" className="sign__input" onChange={handleEmailChange} value={email || ''} required pattern="^.+@.+\..+$"/>
            {!isEmailValid ? <span className="sign__input-error sign__input-error_active">{errorEmail}</span> : ''}
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" onChange={handlePasswordChange} value={password || ''} required minLength="6"/>
            {!isPasswordValid ? <span className="sign__input-error sign__input-error_active">{errorPassword}</span> : ''}
            <input type="submit" value={buttonText} name="submit_button" className={`sign__button sign__button_login ${NoActiveButton}`}/>
            <span className="sign__bottom">Ещё не зарегистрированы? <a href="/sign-up" className="sign__link">Регистрация</a></span>
          </fieldset> 
        </form>
      </div>
    </div>
  )
};

export default Login;