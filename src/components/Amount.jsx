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
           <h2> $0.00</h2>
        </div>
    </div>
  )
}

export default Amount