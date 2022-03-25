import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';

function SavedMovies() {
  const [isMenuOpen, isSetMenuOpen] = React.useState(false);
  const [savedFilms, setSavedFilms] = React.useState([]);

  function handleOpenMenu() {
    isSetMenuOpen(true) 
  }

  function handleCloseMenu() {
    isSetMenuOpen(false)
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    MainApi.getSavedFilms(token)
    .then((films) => {
      setSavedFilms(films.data)
    })
  }, [setSavedFilms])

function handleMovieDelete(data) {
  const token = localStorage.getItem('token');
  MainApi.deleteMovie(data, token)
  .then(() => {
    MainApi.getSavedFilms(token)
    .then((films) => {
      setSavedFilms(films.data)
    })
  })
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
        <MoviesCardList savedFilms={savedFilms} films={savedFilms} page={true} onMovieDelete={handleMovieDelete} setSavedFilms={setSavedFilms}/>
        <Footer />
      </div>
  )
};

export default SavedMovies;