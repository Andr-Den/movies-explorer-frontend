import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import promo_image from '../../images/promo_image.svg'
import './Promo.css'

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <Header back_color='header_promo'>
          <div className="promo__nav">
            <Link className="promo__link promo__link_registration" to="/sign-up">Регистрация</Link>
            <Link className="promo__link" to="/sign-in">Войти</Link>
          </div>
        </Header>
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <img src={promo_image} alt="" className="promo__image" />
      </div>
    </div>
  )
}

export default Promo;