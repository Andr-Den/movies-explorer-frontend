import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

function Register() {
  return (
      <div className="sign">
        <form>
          <fieldset className="sign__container">
            <Link to="/"><img src={logo} alt="логотип" className="sign__image"/></Link>
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">Имя</span>
            <input type="text" className="sign__input" />
            <span className="sign__input-error">Что-то пошло не так...</span>
            <span className="sign__description">E-mail</span>
            <input type="password" className="sign__input" />
            <span className="sign__input-error">Что-то пошло не так...</span>
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" />
            <span className="sign__input-error">Что-то пошло не так...</span>
            <input type="submit" value="Зарегистрироваться" name="submit_button" className="sign__button" />
            <span className="sign__bottom">Уже зарегистрированы? <a href="/sign-in" className="sign__link">Войти</a></span>
          </fieldset> 
        </form>
      </div>
  )
};

export default Register;