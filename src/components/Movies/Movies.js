import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader'
import '../Header/Header.css'

function Movies({savedFilms, setSavedFilms}) {
  const [isMenuOpen, isSetMenuOpen] = React.useState(false);
  const [films, setFilms] = React.useState(JSON.parse(localStorage.getItem('films')) ?? []);
  const [preload, setPreload] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState(localStorage.getItem('input') ?? '');
  const [emptySearch, setEmptySearch] = React.useState(false);
  const [errorName, setErrorName] = React.useState();
  const [isSearchValid, setIsSearchValid] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')) ?? false);



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
      moviesApi.getAllMovies()
      .then((films) => {
        const result =  isChecked ?
        films.filter(film => (film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.description.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.year.includes(searchInput)) && film.duration <= 40) :
        films.filter(film => film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.description.toLowerCase().includes(searchInput.toLowerCase()) || 
          film.year.includes(searchInput))
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
              <MoviesCardList films={films} setSavedFilms={setSavedFilms} savedFilms={savedFilms} classHeight='movie-card-list_all' setFilms={setFilms}/>
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
