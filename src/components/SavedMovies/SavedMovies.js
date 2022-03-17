import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import film_01 from '../../images/film-01.jpg'
import film_02 from '../../images/film-02.jpg'
import film_03 from '../../images/film-03.jpg'
import delete_icon from '../../images/delete-icon.svg'

const films = [
  {
    image: film_01,
    save:  delete_icon
  },
  {
    image: film_02,
    save: delete_icon
  },
  {
    image: film_03,
    save: delete_icon
  }
]

function SavedMovies() {
  return (
      <div className="profile">
        <Header />
        <SearchForm />
        <MoviesCardList films={films}/>
        <Footer />
      </div>
  )
};

export default SavedMovies;