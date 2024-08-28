//funcitonal component
import  React, { useState } from 'react';
import "./User.css"

const User = (props) =>{

    const {name , location , contact} = props

    const [count,setCount] = useState(5)
    const [age,setAge] = useState(22)

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <h3>Age: {age}</h3>
            <h2>Count: {count}  </h2>
        </div>
    ) 
}

export default User;