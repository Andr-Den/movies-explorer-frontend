import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

function Register({handleSubmit, name, setName, password, setPassword, email, setEmail}) {

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <fieldset className="sign__container">
            <Link to="/"  className="sign__image"><img src={logo} alt="логотип"/></Link>
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">Имя</span>
            <input type="text" className="sign__input" value={name || ''} onChange={handleNameChange}/>
            <span className="sign__input-error">Что-то пошло не так...</span>
            <span className="sign__description">E-mail</span>
            <input type="email" className="sign__input" value={email || ''} onChange={handleEmailChange}/>
            <span className="sign__input-error">Что-то пошло не так...</span>
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" value={password || ''} onChange={handlePasswordChange}/>
            <span className="sign__input-error">Что-то пошло не так...</span>
            <input type="submit" value="Зарегистрироваться" name="submit_button" className="sign__button" />
            <span className="sign__bottom">Уже зарегистрированы? <a href="/sign-in" className="sign__link">Войти</a></span>
          </fieldset> 
        </form>
      </div>
  )
};

export default Register;