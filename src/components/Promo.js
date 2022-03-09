import React from 'react'
import logo from '../images/logo.svg'
import promo_image from '../images/promo_image.svg'

function Promo() {
  return (
    <div className="promo">
      <img src={logo} alt="логотип" className="header__logo" />
      <div className="promo__nav">
        <button className="promo__link promo__link_registration" href="#">Регистрация</button>
        <button className="promo__link" href="#">Войти</button>
      </div>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={promo_image} alt="" className="promo__image" />
    </div>
  )
}

export default Promo;