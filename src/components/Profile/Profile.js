import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import AccountButton from '../AccountButton/AccountButton'
import Navigation from '../Navigation/Navigation'
import { CurrentUserContext } from '../../context/CurrentUserContext'

function Profile({ onClick, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isMenuOpen, isSetMenuOpen] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState();
  const [errorName, setErrorName] = React.useState();
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isNameValid, setIsNameValid] = React.useState(false);
  const NoActiveButton = (
    `${((isNameValid || isEmailValid) & (currentUser.name !== name || currentUser.email !== email)) ? '' : 'profile__button_no-active'}`
  );

  function handleOpenMenu() {
    isSetMenuOpen(true) 
  }

  function handleCloseMenu() {
    isSetMenuOpen(false)
  }

  function handleNameChange(e) {
    setErrorName(e.target.validationMessage);
    setIsNameValid(e.target.checkValidity());
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setErrorEmail(e.target.validationMessage);
    setIsEmailValid(e.target.checkValidity());
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      email,
    });
  } 

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]); 

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
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__info">
            <span>Имя</span>
            <input type="text" value={name} onChange={handleNameChange} className="profile__input" minLength="2" maxLength="30" required/>
          </div>
          {!isNameValid ? <span className="sign__input-error sign__input-error_active">{errorName}</span> : ''}
          <div className="profile__line"/>
          <div className="profile__info">
            <span>E-mail</span>
            <input type="email" value={email} onChange={handleEmailChange} className="profile__input" pattern="^.+@.+\..+$"/>
          </div>
          {!isEmailValid ? <span className="sign__input-error sign__input-error_active">{errorEmail}</span> : ''}
          <input type="submit" value="Редактировать" name="button" className={`profile__button ${NoActiveButton}`}  disabled={!((isNameValid || isEmailValid) & (currentUser.name !== name || currentUser.email !== email))}/>
          <button className="profile__button profile__button_exit" onClick={onClick}>Выйти из аккаунта</button>
        </fieldset>
        </form>
      </div>
  )
};

export default Profile;