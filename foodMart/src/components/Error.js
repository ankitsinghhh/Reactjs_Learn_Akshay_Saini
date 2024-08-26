import React from'react';
import './Error.css'
import {useRouteError} from "react-router-dom"



const Error = () =>{

    const err = useRouteError();
    console.log(err)


    return (
        <div className='error-container'>

            <h1>
               OOPs!!! 🌋
            </h1>
            <h2>
                Something went wrong. Please try again. 
            </h2>
            <h3>
                {err.status} : {err.statusText}
            </h3>
            <h3>
                Error details: {err?.data}
            </h3>
          



        </div>
    )
}

export default Error;