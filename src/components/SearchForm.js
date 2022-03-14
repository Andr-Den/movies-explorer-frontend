import React from 'react'
import FilterCheckbox from './FilterCheckbox';

import search from '../images/search.svg'

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <img src={search}/>
        <form className="search-form__search">
          <input placeholder="Фильм" className="search-form__input"/>
          <button type="submit" className="search-form__button" />
        </form>
        <FilterCheckbox />
      </div>
    </div>
  )
}

export default SearchForm;