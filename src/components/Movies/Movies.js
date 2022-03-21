import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom';

import '../Header/Header.css'

import film_01 from '../../images/film-01.jpg'
import film_02 from '../../images/film-02.jpg'
import film_03 from '../../images/film-03.jpg'
import film_04 from '../../images/film-04.jpg'
import film_05 from '../../images/film-05.jpg'
import film_06 from '../../images/film-06.jpg'
import film_07 from '../../images/film-07.jpg'
import film_08 from '../../images/film-08.jpg'
import film_09 from '../../images/film-09.jpg'
import film_10 from '../../images/film-10.jpg'
import film_11 from '../../images/film-11.jpg'
import film_12 from '../../images/film-12.jpg'

const films = [
  {
    save: '',
    image: film_01,
  },
  {
    save: '',
    image: film_02,
  },
  {
    save: 'movie-card__icon_active',
    image: film_03,
  },
  {
    save: '',
    image: film_04,
  },
  {
    save: 'movie-card__icon_active',
    image: film_05,
  },
  {
    save: '',
    image: film_06,
  },
  {
    save: '',
    image: film_07,
  },
  {
    save: '',
    image: film_08,
  },
  {
    save: '',
    image: film_09,
  },
  {
    save: 'movie-card__icon_active',
    image: film_10,
  },
  {
    save: '',
    image: film_11,
  },
  {
    save: '',
    image: film_12
  }
]

function Movies() {
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
              <Link to="/movies" className="header__link header__link_active">Фильмы</Link>
              <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
          </div>
          <AccountButton />
        </div>
        <button className="header__burger" onClick={handleOpenMenu}/>
        </Header>
        <Navigation isOpen={isMenuOpen} onClose={handleCloseMenu}/>
        <SearchForm />
        <MoviesCardList films={films}  class_height='movie-card-list_all'>
          <button className="movies-card-list__more-button">Ещё</button>
        </MoviesCardList >
        <Footer />
      </div>
  )
};

export default Movies;