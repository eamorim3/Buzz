import React from 'react'
import { useState } from 'react';
import Display_info from "./Display_info";
import AddFormsButton from "./AddFormsButton";
import AddInfo from "./AddInfo";
import { VscChromeClose } from 'react-icons/vsc';

export default function ChipInfo({info, onDelete, onClose, company}) {
    
    const [showAddInfo, setShowAddInfo] = useState(false)

    return (
        <div className='container'>
        
        <div className='chip-info-header'>
            
            <h2>{company}</h2>
            <div className='spacer'></div>
            <b>
                <VscChromeClose style={{color:'red', cursor:'pointer'}}
                    onClick={onClose}
                />
                
            </b>
            </div>  
            <Display_info info={info} onDelete={onDelete}/>
        
        </div> 
    );
}
