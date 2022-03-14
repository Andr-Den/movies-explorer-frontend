import React from 'react'

function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" className="filter__checkbox"/>
        <span className="filter__checkbox_visible"></span>
      </label>
      <span>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;