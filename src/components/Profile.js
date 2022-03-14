import React from 'react'
import Header from './Header'

function Profile() {
  return (
      <div className="profile">
        <Header />
        <div className="sign__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__info">
          <span>Имя</span>
          <input type="text" value="Виталий" className="profile__input"/>
        </div>
        <div className="profile__line"/>
        <div className="profile__info">
          <span>E-mail</span>
          <input type="email" value="pochta@yandex.ru" className="profile__input"/>
        </div>
        <input type="submit" value="Редактировать" className="profile__button"/>
        <button className="profile__button profile__button_exit">Выйти из аккаунта</button>
        </div>
      </div>
  )
};

export default Profile;