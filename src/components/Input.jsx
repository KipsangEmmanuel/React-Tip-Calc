import React from 'react'

const Input = ({label}) => {
  return (
    <div>
        <label>{label}</label>
        <input type="number" placeholder='&' />
    </div>
  )
}

export default Input