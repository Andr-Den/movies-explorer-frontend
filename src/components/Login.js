import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'

function Login() {
  return (
    <div className="page">
      <div className="sign">
        <form>
          <fieldset className="sign__container">
            <Link to="/"><img src={logo} alt="логотип" className="sign__image"/></Link>
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">E-mail</span>
            <input type="password" className="sign__input" />
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" />
            <input type="submit" value="Зарегистрироваться" name="submit_button" className="sign__button" />
            <span className="sign__bottom">Ещё не зарегистрированы?<a href="/sign-up" className="sign__link">Регистрация</a></span>
          </fieldset> 
        </form>
      </div>
    </div>
  )
};

export default Login;