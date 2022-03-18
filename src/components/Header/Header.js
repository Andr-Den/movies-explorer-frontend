import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

function Header({children, back_color}) {
  return (
    <header className={`header ${back_color}`}>
      <div className="header__container">
        {/* <Link to="/"><img src={logo} alt="логотип" className="header__logo" /></Link> */}
        <Link to="/"><img src={logo} alt="логотип" className="header__logo" /></Link>
        {children}
      </div>
    </header>
  )
}

export default Header;