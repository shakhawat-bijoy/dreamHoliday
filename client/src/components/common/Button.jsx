import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, children, className, to, onClick, type }) => {
  const label = children ?? text

  return (
    <div onClick={onClick}>
      {to ? (
        <Link to={to}>
          <button type={type} className={`cursor-pointer ${className}`}>
            {label}
          </button>
        </Link>
      ) : (
        <button type={type} className={`cursor-pointer ${className}`}>
          {label}
        </button>
      )}
    </div>
  )
}

export default Button