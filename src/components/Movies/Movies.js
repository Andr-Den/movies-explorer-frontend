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
  const [films, setFilms] = React.useState(JSON.parse(localStorage.getItem('films')) ?? []);
  const [preload, setPreload] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState(localStorage.getItem('input') ?? '');
  const [emptySearch, setEmptySearch] = React.useState(false);
  const [addMovies, setAddMovies] = React.useState();
  const [savedFilms, setSavedFilms] = React.useState([]);
  const [errorName, setErrorName] = React.useState();
  const [isSearchValid, setIsSearchValid] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')) ?? false);

  React.useEffect(() => {
    const windowInnerWidth = window.innerWidth
    if (windowInnerWidth > 768 ) {
      setAddMovies(12)
    } else if (windowInnerWidth <= 768 && windowInnerWidth >= 481) {
      setAddMovies(10)
    } else if (windowInnerWidth >= 320) {
      setAddMovies(5)
    }
  }, [])

  function handleOpenMenu() {
    isSetMenuOpen(true) 
  }

  function handleCloseMenu() {
    isSetMenuOpen(false)
  }

  function handleCheck() {
    if (!isChecked) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    } 
  }

  function handleSearch(e) {
    e.preventDefault();  
    if (searchInput != null) {
      setPreload(true);
      setEmptySearch(true)
      setIsSearchValid(true);
      localStorage.setItem('input', searchInput)
      localStorage.setItem('checkbox', JSON.stringify(isChecked))
      const token = localStorage.getItem('token');
      MainApi.getSavedFilms(token)
      .then((films) => {
        setSavedFilms(films.data)
      })
      moviesApi.getAllMovies()
      .then((films) => {
        const result =  isChecked ?
        films.filter(film => (film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.description.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.year.includes(searchInput)) && film.duration <= 40).slice(0,addMovies) :
        films.filter(film => film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.description.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.year.includes(searchInput)).slice(0,addMovies)
        setFilms(result)
        localStorage.setItem('films', JSON.stringify(result))
        setPreload(false)
      })
      .catch((err) => {
        setPreload(false)
        setSearchError(true)
        console.log(err);
      });
    } else {
      setErrorName("Нужно ввести ключевое слово")
      setIsSearchValid(false);
    }
  }

  function handleAddMovies(e) {
    e.preventDefault();
    const windowInnerWidth = window.innerWidth
    if (windowInnerWidth > 768 ) {
      setAddMovies(addMovies+3)
    } else if (windowInnerWidth <= 768) {
      setAddMovies(addMovies+2)
    } 
    moviesApi.getAllMovies()
    .then((films) => {
      if (!isChecked) {
        setFilms(films.filter(film => film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || film.description.toLowerCase().includes(searchInput.toLowerCase()) || film.year.includes(searchInput)).slice(0,addMovies))
      } else {
        setFilms(films.filter(film => (film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || film.description.toLowerCase().includes(searchInput.toLowerCase()) || film.year.includes(searchInput)) && film.duration <=40).slice(0,addMovies))
      }
    })
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
        <Navigation isOpen={isMenuOpen} onClose={handleCloseMenu} pageMovies="navigation__link_active"/>
        <SearchForm onSubmit={handleSearch} onChange={handleSearchChange} errorName={errorName} isSearchValid={isSearchValid} onClick={handleCheck}/>
        {preload ? <Preloader /> : 
        <>
        {searchError ? <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> : 
          <>
            {
              films.length === 0 && emptySearch ? <p className="movies-card-list__error">Ничего не найдено</p> : 
              <MoviesCardList films={films} savedFilms={savedFilms} searchInput={searchInput} class_height='movie-card-list_all' onClick={handleAddMovies} setFilms={setFilms}/>
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
