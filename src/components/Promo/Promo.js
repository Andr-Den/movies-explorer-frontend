import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import promo_image from '../../images/promo_image.svg'
import './Promo.css'

function Promo() {
  return (
    <div className="promo">
      <Link to="/"><img src={logo} alt="логотип" className="header__logo" /></Link>
      <div className="promo__nav">
        <Link className="promo__link promo__link_registration" to="/sign-up">Регистрация</Link>
        <Link className="promo__link" to="/sign-in">Войти</Link>
      </div>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={promo_image} alt="" className="promo__image" />
    </div>
  )
}

export default Promo;