import React from 'react'
import { VscChromeClose } from "react-icons/vsc";

export default function Info({info, onDelete}) {
    console.log('might be it')
    console.log(info)
    return (
    <div className='information'>
        <div className='line'>
            <b>{info.type}</b>
            <div className='spacer'></div>
            <b>
                <VscChromeClose style={{color:'red', cursor:'pointer'}}
                    onClick={() => onDelete(info.type)}
                />
                
            </b>
        </div>
        <a>{info.text}</a>   
    </div>
  )

}
