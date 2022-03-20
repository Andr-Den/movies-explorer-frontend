import React from 'react'
import { Link } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import './Navigation.css'

function Navigation({isOpen, onClose}) {
  return (
    <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className="navigation__container">
        <button className="navigation__close-icon" onClick={onClose}/>
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