import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="логотип" className="header__logo" /></Link>
      <div className="header__nav">
        <div className="header__links">
          <Link to="/movies" className="header__link">Фильмы</Link>
          <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
        </div>
        <Link className="header__account" to="/profile">Аккаунт</Link>
      </div>
    </header>
  )
}

export default Header;