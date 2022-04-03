import React from 'react'
import { useState } from 'react'
import ChipInfo from './ChipInfo'

export default function Dashboard() {
    const [info, setInfo] = useState([
        {
            text: '07614638',
            type: 'Bank Account'
        },
        {
            text: 'aspla#-7^',
            type: 'Password'
        }
    ])
    
    const [openDashboard, setOpenDashboard] = useState(false);
    
    const closeDashboard = () => {
        setOpenDashboard(!openDashboard)
    }

    const deleteInfo = (type) => {
        setInfo(info.filter((pInfo) => pInfo.type !== type))
    }
    
    return (
            <>
                <ChipInfo info={info} onDelete={deleteInfo} onClose={closeDashboard}/>
                <ChipInfo info={info} onDelete={deleteInfo} onClose={closeDashboard}/>
                <ChipInfo info={info} onDelete={deleteInfo} onClose={closeDashboard}/>
            </>
    );
}
