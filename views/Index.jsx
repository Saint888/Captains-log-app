import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>My Ships</h1>
            <ul>
                {props.Ship.map((Ship, index) => 
                    <li key ={index} >
                        <a href={`/logs/${Ship._id}`}><strong>{Ship.title}</strong></a>
                    </li>
                )}
            </ul>
            <br/>
            <a href="/newship">Add</a>
        </div>
    )
}

export default Index