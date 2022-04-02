import React from 'react'
import { useState } from 'react'

export default function AddInfo({onClick}) {
    const [text, setText] = useState('')
    const [day, setType] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onClick({ text, type })
    
        setText('')
        setType('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Data type (e.g. name, password)</label>
                <input
                type='type'
                placeholder='name/password/...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                type='text'
                placeholder='Add Day & Time'
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}