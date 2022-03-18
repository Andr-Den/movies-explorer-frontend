import React from 'react'
import { Link } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import './Navigation.css'

import close from '../../images/close.svg'

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__container">
        <img src={close} alt="кнопка закрытия" className="navigation__close-icon"/>
        <ul className="navigation__list">
          <Link to="/" className="navigation__links"><li className="navigation__link">Главная</li></Link>
          <Link to="/movies" className="navigation__links"><li className="navigation__link navigation__link_active">Фильмы</li></Link>
          <Link to="/saved-movies" className="navigation__links"><li className="navigation__link">Сохранённые фильмы</li></Link>
        </ul>
        <AccountButton />
      </div>
    </div>
  );
}

export default Navigation;