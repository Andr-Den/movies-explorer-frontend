import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom';
import { moviesApi } from '../../utils/MoviesApi';
import * as MainApi from '../../utils/MainApi'
import Preloader from '../Preloader/Preloader'
import '../Header/Header.css'

function Movies() {
  const [isMenuOpen, isSetMenuOpen] = React.useState(false);
  const [films, setFilms] = React.useState([]);
  const [preload, setPreload] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState();
  const [emptySearch, setEmptySearch] = React.useState(false);
  const [addMovies, setAddMovies] = React.useState(15);
  const [savedFilms, setSavedFilms] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    MainApi.getSavedFilms(token)
    .then((films) => {
      setSavedFilms(films.data)
    })
  }, [setSavedFilms])

  function handleOpenMenu() {
    isSetMenuOpen(true) 
  }

  function handleCloseMenu() {
    isSetMenuOpen(false)
  }

  function handleSearch(e) {
    e.preventDefault();
    setPreload(true);
    setEmptySearch(true)
    moviesApi.getAllMovies()
    .then((films) => {
      setFilms(films.filter(film => film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || film.year.includes(searchInput)).slice(0,12))
      setPreload(false)
    })
    .catch((err) => {
      setPreload(false)
      setSearchError(true)
      console.log(err);
    });
  }

  function handleAddMovies(e) {
    e.preventDefault();
    setAddMovies(addMovies+3)
    moviesApi.getAllMovies()
    .then((films) => {
      setFilms(films.filter(film => film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || film.year.includes(searchInput)).slice(0,addMovies))
    });
  }

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
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
        <SearchForm onSubmit={handleSearch} onChange={handleSearchChange}/>
        {preload ? <Preloader /> : 
        <>
        {searchError ? <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> : 
          <>
            {
              films.length === 0 && emptySearch ? <p className="movies-card-list__error">Ничего не найдено</p> : 
              <MoviesCardList films={films} savedFilms={savedFilms} searchInput={searchInput} class_height='movie-card-list_all' onClick={handleAddMovies} />
            }
          </>
        }
                  </>
        }
        <Footer />
      </div>
  )
};

export default Movies;
