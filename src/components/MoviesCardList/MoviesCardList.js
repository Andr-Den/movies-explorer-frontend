import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ films, savedFilms, classHeight, page, onMovieDelete, setSavedFilms }) {
  const [addMovies, setAddMovies] = React.useState();

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
  function getId(film) {
    const movie = savedFilms.find(m => m.movieId === film.id)
    return movie
   }

   function handleAddMovies(e) {
    e.preventDefault();
    const windowInnerWidth = window.innerWidth
    if (windowInnerWidth > 768 ) {
      setAddMovies(addMovies+3)
    } else if (windowInnerWidth <= 768) {
      setAddMovies(addMovies+2)
    } 
  }

  return (
    <>
        <ul className={`movies-card-list ${classHeight}`}>
          {films.slice(0, addMovies).map((film, index) => (
            <MovieCard data={film} page={page} key={index} onMovieDelete={onMovieDelete} getId={getId(film)} savedFilms={savedFilms} setSavedFilms={setSavedFilms}/>
          ))}
        </ul>
        {films.length >= 12 && addMovies < films.length && <button className="movies-card-list__more-button" onClick={handleAddMovies}>Ещё</button>}
      </>
)}

export default MoviesCardList;
