import React from 'react';
import Login from '../Form';

function ShowCorrectPage(Component) {

    if(!localStorage.getItem('user'))
    return Login;

    return Component;
}

export default ShowCorrectPage;