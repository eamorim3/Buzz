import React from 'react'
import { useState } from 'react'
import ChipInfo from './ChipInfo'
import Chip from "./Chip"
import DisplayChips from './DisplayChips'

export default function Dashboard() {
    const [info, setInfo] = useState([
        {
            company: 'Facebook',
            data: [
                {
                    text: 'danielemail@gmail.com',
                    type: 'email'
                },
                {
                    text: '56789',
                    type: 'Bank'
                }
            ]
        },
        {
            company: 'Facebook',
            data: [
                {
                    text: 'danielemail@gmail.com',
                    type: 'email'
                },
                {
                    text: '56789',
                    type: 'Bank'
                }
            ]
        },
        {
            company: 'Facebook',
            data: [
                {
                    text: 'danielemail@gmail.com',
                    type: 'email'
                },
                {
                    text: '56789',
                    type: 'Bank'
                }
            ]
        },{
            company: 'Facebook',
            data: [
                {
                    text: 'danielemail@gmail.com',
                    type: 'email'
                },
                {
                    text: '56789',
                    type: 'Bank'
                }
            ]
        },
        {
            company: 'Facebook',
            data: [
                {
                    text: 'danielemail@gmail.com',
                    type: 'email'
                },
                {
                    text: '56789',
                    type: 'Bank'
                }
            ]
        }
    
    ])

    const [openDashboard, setOpenDashboard] = useState(true);
    
    const closeDashboard = () => {
        setOpenDashboard(!openDashboard)
    }

    const deleteInfo = (type) => {
        setInfo(info.filter((pInfo) => pInfo.type !== type))
    }
    
    return (
        <DisplayChips info={info}/>    
    );
}
