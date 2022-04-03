import React from 'react'
import { VscChromeClose } from "react-icons/vsc";

export default function Info({info, onDelete}) {
    console.log('might be it')
    console.log(info)
    return (
    <div className='information'>
        <div className='line'>
            <h3>{info.type}</h3>
            <div className='spacer'></div>
            <h3>
                <VscChromeClose style={{color:'red', cursor:'pointer'}}
                    onClick={() => onDelete(info.type)}
                />
            </h3>
        </div>

        <p>{info.text}</p>   
    </div>
  )

}
