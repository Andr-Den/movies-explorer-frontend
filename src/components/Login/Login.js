import React from 'react'
import '../Register/Register.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

function Login({handleSubmit, password, setPassword, email, setEmail, buttonText}) {
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="page">
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <fieldset className="sign__container">
            <Link to="/" className="sign__image"><img src={logo} alt="логотип"/></Link>
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">E-mail</span>
            <input type="email" className="sign__input" onChange={handleEmailChange} value={email}/>
            <span className="sign__input-error">Что-то пошло не так...</span>
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" onChange={handlePasswordChange} value={password}/>
            <span className="sign__input-error">Что-то пошло не так...</span>
            <input type="submit" value={buttonText} name="submit_button" className="sign__button sign__button_login" />
            <span className="sign__bottom">Ещё не зарегистрированы? <a href="/sign-up" className="sign__link">Регистрация</a></span>
          </fieldset> 
        </form>
      </div>
    </div>
  )
};

export default Login;