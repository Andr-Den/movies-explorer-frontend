import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ films, savedFilms, class_height, onClick, page, onMovieDelete, setSavedFilms }) {
  function getId(film) {
    const movie = savedFilms.find(m => m.movieId === film.id)
    return movie
   }

  return (
    <>
        <ul className={`movies-card-list ${class_height}`}>
          {films.map((film, index) => (
            <MovieCard data={film} page={page} key={index} onMovieDelete={onMovieDelete} getId={getId(film)} savedFilms={savedFilms} setSavedFilms={setSavedFilms}/>
          ))}
        </ul>
        {films.length >= 12 ? <button className="movies-card-list__more-button" onClick={onClick}>Ещё</button> : ''}
      </>
)}

export default MoviesCardList;
