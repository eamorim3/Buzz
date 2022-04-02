import React from 'react'

const Button = ({color, text}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <button onClick={onClick}
        style={{ backgroundColor: color}} className='btn'>
        {text}
        </button>
    )
}
Button.defaultProps = {
    color: "#B3A369",
    text:'LOGIN WITH BUZZ'
}
export default Button