import React from 'react'
import './input.css'

const Input = ({label}) => {
  return (
    <div className='input'>
        <label>{label}</label>
        <input type="number" placeholder='&' />
    </div>
  )
}

export default Input