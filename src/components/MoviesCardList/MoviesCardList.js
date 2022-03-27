import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ films, savedFilms, class_height, onClick, page, onMovieDelete }) {

  function isSaved(film) {
    return savedFilms.map((savedFilm) => savedFilm.movieId).includes(film.id)
  }

  function getId(film) {
    const movie = savedFilms.find(m => m.movieId === film.id)
    return movie
   }

  return (
    <>
        <ul className={`movies-card-list ${class_height}`}>
          {films.map((film) => (
            <MovieCard data={film} page={page} onMovieDelete={onMovieDelete} key={film} isSaved={isSaved(film)} getId={getId(film)}/>
          ))}
        </ul>
        {films.length >= 5 ? <button className="movies-card-list__more-button" onClick={onClick}>Ещё</button> : ''}
      </>
)}

export default MoviesCardList;
