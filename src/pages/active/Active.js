//活动页面

import React, {
    Component, useState,createContext, useEffect
} from 'react';
import Headbar from '../../compomemnt/headbar/Headbar'
import TimeList from '../../compomemnt/timeList/TimeList'
import DetailActive from '../../compomemnt/detailActive/DetailActive'
import { Layout } from 'antd';
import style from './Active.module.css'
import '../.././style/global.css'
export const IdContext = createContext()

function Active() {
    const [activeId,setActiveId] = useState(1)
    
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
        <div className={style.flexbox}>
                <div className={style.container}>
                    <Headbar />
                    <IdContext.Provider value={value}>
                       <TimeList />
                       <DetailActive />
                    </IdContext.Provider>
                </div>
        </div>
    )
}

export default Active