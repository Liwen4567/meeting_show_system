import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Guest from '../../compomemnt/guestInformation/Guest'
import AlterGuest from '../../compomemnt/alterGuest/AlterGuest'
import AlterPsw from '../../compomemnt/alterPsw/AlterPsw'
import Nav from '../../compomemnt/navigation/Nav'
import Headbar from '../../compomemnt/headbar/Headbar'
import './style.css'


function Person() {
    return (
        <>
            <div className='person_container'>
                <Headbar />
                <div className="containerBox">
                    <div className="body_container">
                    <div className='person-left'>
                        <Nav></Nav>
                    </div>
                    <div className='person-right'>

                        <Route path='/person/guest' component={Guest}></Route>
                        <Route path='/person/altrInformation' component={AlterGuest}></Route>
                        <Route path='/person/alterPassword' component={AlterPsw}></Route>
                        <Redirect to={'/person/guest'} />

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Person