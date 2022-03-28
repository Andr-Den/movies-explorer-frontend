import React from 'react'

import './InfoToolTip.css'

function InfoTooltip({ tooltipOpen, tooltipClose, tooltipErrorText}) {

  return (
    <div className={`tooltip ${tooltipOpen ? 'tooltip_opened' : ''}`} >
        <div className="tooltip__container">
          <button className={`tooltip__icon`} type="button" onClick={tooltipClose}></button>
          <h2 className="tooltip__title">{tooltipErrorText}</h2>
        </div>
    </div>
  )
}

export default InfoTooltip;