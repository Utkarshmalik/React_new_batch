import React from 'react';
import Login from '../Form';
import {Redirect} from 'react-router-dom';



function SendToLogin()
{
    return <Redirect to="/login"/>

}


function ShowCorrectPage(Component) {


    if(!localStorage.getItem('user'))
    return SendToLogin;

    return Component;
}


export default ShowCorrectPage;