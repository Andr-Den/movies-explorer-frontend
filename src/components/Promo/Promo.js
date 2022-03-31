import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import promo_image from '../../images/promo_image.svg'
import './Promo.css'
import AccountButton from '../AccountButton/AccountButton'
import Navigation from '../Navigation/Navigation'

function Promo({loggedIn}) {
  const [isMenuOpen, isSetMenuOpen] = React.useState(false);

  function handleOpenMenu() {
    isSetMenuOpen(true) 
  }

  function handleCloseMenu() {
    isSetMenuOpen(false)
  }
  return (
    <div className="promo">
      <div className="promo__container">
        <Header back_color='header_promo'>
          {loggedIn ? 
          <>
            <div className="header__nav">
              <div className="header__links">
                <Link to="/movies" className="header__link">Фильмы</Link>
                <Link to="/saved-movies" className="header__link header__link_active">Сохранённые фильмы</Link>
              </div>
            <AccountButton />
            </div> 
            <button className="header__burger header__burger_main" onClick={handleOpenMenu} /> 
            </> : 
              <div className="promo__nav">
                <Link className="promo__link promo__link_registration" to="/sign-up">Регистрация</Link>
                <Link className="promo__link" to="/sign-in">Войти</Link>
              </div>}
        </Header>
        <Navigation isOpen={isMenuOpen} onClose={handleCloseMenu} pageMain="navigation__link_active"/>
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <img src={promo_image} alt="" className="promo__image" />
      </div>
    </div>
  )
}

export default Promo;