import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox({onClick}) {
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" className="filter__checkbox" onClick={onClick}/>
        <span className="filter__checkbox_visible"></span>
      </label>
      <span>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
