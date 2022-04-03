import React from 'react'
import { useState } from 'react';
import Display_info from "./Display_info";
import AddFormsButton from "./AddFormsButton";
import AddInfo from "./AddInfo";

export default function ChipInfo({info, onDelete, onClose}) {
    
    const [showAddInfo, setShowAddInfo] = useState(false)

    return (
        <div className='container'>
        
        <div className='AllInformation'>
            
            <h2>Your information</h2>
            <Display_info info={info} onDelete={onDelete}/>
            {/* <AddFormsButton
            onAdd={() => setShowAddInfo(!showAddInfo)}
            showAdd={showAddInfo}
            /> */}
            
            {/* {showAddInfo && <AddInfo onClick={addInfo} />} */}
        </div>  
        </div> 
    );
}
