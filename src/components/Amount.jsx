import React from 'react'
import './amount.css'

const Amount = ({amount}) => {
  return (
    <div className='tip'>
        <div className="left">
            <h2>Tip Amount</h2>
            <p>/ person</p>
        </div>
        <div className="right">
            $0.00
        </div>
    </div>
  )
}

export default Amount