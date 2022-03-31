import React from 'react'
import { Link } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import './Navigation.css'

function Navigation({isOpen, onClose, pageSavedMovies, pageMovies, pageMain}) {
  return (
    <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className="navigation__container">
        <button className="navigation__close-icon" onClick={onClose}/>
        <ul className="navigation__list">
          <Link to="/" className="navigation__links"><li className={`navigation__link ${pageMain}`}>Главная</li></Link>
          <Link to="/movies" className="navigation__links"><li className={`navigation__link ${pageMovies}`}>Фильмы</li></Link>
          <Link to="/saved-movies" className="navigation__links"><li className={`navigation__link ${pageSavedMovies}`}>Сохранённые фильмы</li></Link>
        </ul>
        <AccountButton />
      </div>
    </div>
  );
}

export default Navigation;