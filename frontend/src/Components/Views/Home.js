import React,{useEffect} from 'react';
import axios from "axios"
import url from '../../url'
import { useLocation, useHistory } from "react-router-dom";

const Home = ()=>{
    
    const location = useLocation();
    const history = useHistory();
    const userobj = location?.state?.details
    useEffect(async()=>{
        if(!userobj)  {
            
            history.push("/signup")
            alert("please Authenticate")
        }
        else alert('your JWT' +userobj.tokens[0].token )
    },[])

    return (
        <div>
            <p>Welcome {userobj?.fullName}</p>
            <p>Your email {userobj?.email}</p>
            <p>YOUR jwt token {userobj?.tokens[0]?.token}</p>
            <p> this must be sent when ever your are making requests and will be deleted on logout</p>
        </div>
    )
}

export default Home