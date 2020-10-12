//活动页面

import React, {
    Component, useState,createContext, useEffect
} from 'react';
import Headbar from '../../compomemnt/headbar/Headbar'
import TimeList from '../../compomemnt/timeList/TimeList'
import DetailActive from '../../compomemnt/detailActive/DetailActive'
import { Layout } from 'antd';
import style from './Active.module.css'

import {
    HashRouter,
    Redirect,
    Route,
    Switch,
    NavLink
  } from 'react-router-dom'

export const IdContext = createContext()

function Active() {
    const [activeId,setActiveId] = useState(9999)
    
    // useEffect(()=>{
    //     console.log(activeId)
    // },[activeId])

    const value = {
        activeId: activeId,
        changeId: (e)=>{
            setActiveId(e)
        }
    }

    return (
                <div className={style.container}>
                    
                    <Headbar />
                    

                    <IdContext.Provider value={value}>
                        <TimeList/>
                        <DetailActive/>
                    </IdContext.Provider> 
                </div>
    )
}

export default Active