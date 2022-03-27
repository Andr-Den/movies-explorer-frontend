import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import search from '../../images/search.svg'

function SearchForm({onSubmit, onChange, errorName, isSearchValid}) {

  return (
    <div className="search-form">
      <div className="search-form__container">
        <img src={search} alt="поиск" className="search-form__icon"/>
        <form className="search-form__search" onSubmit={onSubmit}>
          <input placeholder="Фильм" className="search-form__input" onChange={onChange}/>
          {!isSearchValid ? <span className="search__input-error">{errorName}</span> : ''}
          <button type="submit" className="search-form__button"></button>
        </form>
        <FilterCheckbox />
      </div>
    </div>
  )
}

export default SearchForm;