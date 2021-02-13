import React from 'react';
import Button from './button';


/*
heading + buttion 
*/

const Heading=(props)=>
{
    console.log("heading");

    return(
        <div>
        <h1>{props.headingData}</h1>
        <Button/>
        </div>
    )
}

export default Heading;