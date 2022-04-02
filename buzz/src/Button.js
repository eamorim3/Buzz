import React from 'react'

export default function Button({ color, text, onClick }) {
    return (
      <button className='btn'
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    )
  }