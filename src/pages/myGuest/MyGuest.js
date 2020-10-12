//负责嘉宾页面

import React, {
    Component, useState,createContext, useEffect
} from 'react';
import Headbar from '../../compomemnt/headbar/Headbar'
import GuestTimeList from '../../compomemnt/guestTimeList/GuestTimeList'
import GuestDetailActive from '../../compomemnt/guestDetailActive/GuestDetailActive'
import { Layout } from 'antd';
import style from './MyGuest.module.css'
import GuestList from '../../compomemnt/guestList/GuestList'

import {
    HashRouter,
    Redirect,
    Route,
    Switch,
    NavLink
  } from 'react-router-dom'

export const IdContext = createContext()

function MyGuest() {
    const [activeId,setActiveId] = useState(9999)
    const [guestId, setGuestId] = useState(9999)
    
    // useEffect(()=>{
    //     console.log(activeId)
    // },[activeId])

    const value = {
        activeId: activeId,
        guestId: guestId,
        changeId: (e)=>{
            setActiveId(e)
        },
        changeGuestId: (e)=>{
            setGuestId(e)
        }
    }

    return (
                <div className={style.container}>
                    
                    <Headbar />
                    

                    <IdContext.Provider value={value}>
                        <GuestList/>
                        <GuestTimeList/>
                        <GuestDetailActive/>
                    </IdContext.Provider> 
                </div>
    )
}

export default MyGuest