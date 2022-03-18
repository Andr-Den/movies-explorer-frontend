import React from 'react'
import AccountButton from '../AccountButton/AccountButton';
import './Navigation.css'

import close from '../../images/close.svg'

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__container">
        <img src={close} alt="кнопка закрытия" className="navigation__close-icon"/>
        <ul className="navigation__list">
          <li className="navigation__link">Главная</li>
          <li className="navigation__link navigation__link_active">Фильмы</li>
          <li className="navigation__link">Сохранённые фильмы</li>
        </ul>
        <AccountButton />
      </div>
    </div>
  );
}

export default Navigation;