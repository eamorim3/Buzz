import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useState } from 'react'

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
                <label>Data type (e.g. name, password)</label>
                <input
                type='text'
                placeholder='Add data type'
                value={type}
                onChange={(e) => setType(e.target.value)}
                />
            </div>
            <div className='add-data-form'>
                <label>Data</label>
                <input
                type='text'
                placeholder='Add data'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <input type='submit' value='Save data' className='submit-add-data' />
        </form>
        </div>
    )
}