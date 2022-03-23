import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import AccountButton from '../AccountButton/AccountButton'
import Navigation from '../Navigation/Navigation'

function Profile({name, email, onClick, onUpdateUser, setUserName, setUserEmail}) {
  const [isMenuOpen, isSetMenuOpen] = React.useState(false);

  function handleOpenMenu() {
    isSetMenuOpen(true) 
  }

  function handleCloseMenu() {
    isSetMenuOpen(false)
  }

  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  function handleEmailChange(e) {
    setUserEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      email,
    });
  } 
  return (
      <div className="profile">
        <Header>
          <div className="header__nav">
            <div className="header__links">
              <Link to="/movies" className="header__link">Фильмы</Link>
              <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
            </div>
            <AccountButton />
          </div>
          <button className="header__burger" onClick={handleOpenMenu}/>
        </Header>
        <Navigation isOpen={isMenuOpen} onClose={handleCloseMenu}/>
        <form onSubmit={handleSubmit}>
        <fieldset className="profile__container" onSubmit={handleSubmit}>
          <h2 className="profile__title">Привет, {name}!</h2>
          <div className="profile__info">
            <span>Имя</span>
            <input type="text" value={name} onChange={handleNameChange} className="profile__input"/>
          </div>
          <div className="profile__line"/>
          <div className="profile__info">
            <span>E-mail</span>
            <input type="email" value={email} onChange={handleEmailChange} className="profile__input"/>
          </div>
          <input type="submit" value="Редактировать" className="profile__button"/>
          <button className="profile__button profile__button_exit" onClick={onClick}>Выйти из аккаунта</button>
        </fieldset>
        </form>
      </div>
  )
};

export default Profile;