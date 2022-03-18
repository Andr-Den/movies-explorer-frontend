import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AccountButton from '../AccountButton/AccountButton';
import { Link } from 'react-router-dom';

import '../Header/Header.css'

import save_active from '../../images/save_active.svg'
import save_inactive from '../../images/save_inactive.svg'
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
    save: save_inactive,
    image: film_01,
  },
  {
    save: save_inactive,
    image: film_02,
  },
  {
    save: save_active,
    image: film_03,
  },
  {
    save: save_inactive,
    image: film_04,
  },
  {
    save: save_active,
    image: film_05,
  },
  {
    save: save_inactive,
    image: film_06,
  },
  {
    save: save_inactive,
    image: film_07,
  },
  {
    save: save_inactive,
    image: film_08,
  },
  {
    save: save_inactive,
    image: film_09,
  },
  {
    save: save_active,
    image: film_10,
  },
  {
    save: save_inactive,
    image: film_11,
  },
  {
    save: save_inactive,
    image: film_12
  }
]

function Movies() {
  return (
      <div className="page">
        <Header>
          <div className="header__nav">
            <div className="header__links">
              <Link to="/movies" className="header__link">Фильмы</Link>
              <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
          </div>
          <AccountButton />
        </div>
        <div className="header__burger"/>
        </Header>
        <SearchForm />
        <MoviesCardList films={films}>
          <button className="movies-card-list__more-button">Ещё</button>
        </MoviesCardList>
        <Footer />
      </div>
  )
};

export default Movies;