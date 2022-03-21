import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom';

import film_01 from '../../images/film-01.jpg'
import film_02 from '../../images/film-02.jpg'
import film_03 from '../../images/film-03.jpg'

const films = [
  {
    image: film_01,
    save:  'movie-card__icon_close'
  },
  {
    image: film_02,
    save: 'movie-card__icon_close'
  },
  {
    image: film_03,
    save: 'movie-card__icon_close'
  }
]

function SavedMovies() {

  const [isMenuOpen, isSetMenuOpen] = React.useState(false);

  function handleOpenMenu() {
    isSetMenuOpen(true) 
  }

  function handleCloseMenu() {
    isSetMenuOpen(false)
  }
  return (
      <div className="page">
        <Header>
          <div className="header__nav">
              <div className="header__links">
                <Link to="/movies" className="header__link">Фильмы</Link>
                <Link to="/saved-movies" className="header__link header__link_active">Сохранённые фильмы</Link>
            </div>
            <AccountButton />
        </div>
        <button className="header__burger" onClick={handleOpenMenu}/>
        </Header>
        <Navigation isOpen={isMenuOpen} onClose={handleCloseMenu}/>
        <SearchForm />
        <MoviesCardList films={films}/>
        <Footer />
      </div>
  )
};

export default SavedMovies;