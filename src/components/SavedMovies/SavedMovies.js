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
  const [searchInput, setSearchInput] = React.useState();
  const [errorName, setErrorName] = React.useState();
  const [isSearchValid, setIsSearchValid] = React.useState(false);

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

  function handleSearch(e) {
    e.preventDefault();
    if (searchInput != null)
      {
        setIsSearchValid(true);
        setSavedFilms(savedFilms.filter(film => film.nameRU.toLowerCase().includes(searchInput.toLowerCase()) || film.year.includes(searchInput)).slice(0,12))
      } else {
        setErrorName("Нужно ввести ключевое слово")
        setIsSearchValid(false);
      }
  }
  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

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
        <Navigation isOpen={isMenuOpen} onClose={handleCloseMenu} pageSavedMovies="navigation__link_active"/>
        <SearchForm onSubmit={handleSearch} onChange={handleSearchChange} errorName={errorName} isSearchValid={isSearchValid}/>
        <MoviesCardList savedFilms={savedFilms} films={savedFilms} page={true} onMovieDelete={handleMovieDelete} setSavedFilms={setSavedFilms}/>
        <Footer />
      </div>
  )
};

export default SavedMovies;