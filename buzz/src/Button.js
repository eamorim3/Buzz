import React from 'react'

export default function Button({ color, text, onClick }) {
    return (

        <div class="button" id="button-3" onClick={onClick} style={{ backgroundColor: color }}>
    
            <div id="circle"></div>
            <a href="#">{text}</a>
        
        </div>
      
    )
  }