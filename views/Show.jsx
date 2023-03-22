import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Ship Info</h1>
            <p>The <strong>{props.result.title}</strong> {props.result.shipIsBroken ? 'is broken' : 'is NOT broken'}.</p>
            <p><strong>Entry: </strong>{props.result.entry}</p> 
            <a href="/">Back</a>
        </div>
    )
}

export default Show;