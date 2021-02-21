import React,{useState,useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import UserComponent from './User';

function FullUser(props) {
    
    let match = useRouteMatch();
    console.log(match);

    const {id}=match.params;

    const [loading,changeLoading]=useState(true);
    const [userData,changeUserData]=useState({});

    console.log(id);

    // ComponentDidMount()
    // {

    // }

    useEffect(()=>
    {
        fetch(`https://dummyapi.io/data/api/user/${id}`,{
            headers:{
                "app-id":"5fca5a3236a334a6a8f40cc7"
            }
        })
        .then(data=>data.json())
        .then(data=>{
            changeLoading(false);
            changeUserData(data);
        });
    },[id])
    


    return (
        <div>
        {
        (loading)?<Spinner>Please Wait ! We are fetching user details </Spinner>:<UserComponent userDetails={userData} />
        }
        </div>
    );
}

export default FullUser;