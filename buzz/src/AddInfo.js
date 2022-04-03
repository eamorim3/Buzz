import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'

export default function AddInfo({onClick}) {
    const [text, setText] = useState('')
    const [type, setType] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onClick({ text, type })
        
        setText('')
        setType('')
    }
    return (
        <div className='form-div'>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='add-data-form'>
                <input
                type='text'
                placeholder='Field Name'
                value={type}
                onChange={(e) => setType(e.target.value)}
                />
            </div>
            <div className='add-data-form'>
                <input
                type='text'
                placeholder='Field Value'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
        <input type='submit' className='form-submit-button'/>
        </form>
        </div>
    )
}