import React from 'react'

export default function Chip({company, data}) {

    return (
        <div className='container'>
        
        <div className='chip-header'>
            
            <h2>{company}</h2>
            
            {/* <Display_info info={info} onDelete={onDelete}/> */}
        
        </div> 
        </div>
    );
}
