import React from 'react'

import './InfoToolTip.css'

function InfoTooltip({ popupOpen, popupClose, tooltipErrorText}) {

  return (
    <div className={`tooltip ${popupOpen ? 'tooltip_opened' : ''}`} >
        <div className="tooltip__container">
          <button className={`tooltip__icon`} type="button" onClick={popupClose}></button>
          <h2 className="tooltip__title">{tooltipErrorText}</h2>
        </div>
    </div>
  )
}

export default InfoTooltip;