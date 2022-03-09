import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
      <div className="header__nav">
        <div className="header__links">
          <p>Фильмы</p>
          <p>Сохранённые фильмы</p>
        </div>
        <button className="header__account" href="#">Аккаунт</button>
      </div>
    </header>
  )
}

export default Header;