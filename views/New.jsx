import React from 'react'


function New() {
    return ( 
        <div>
            <h1>New Ship</h1>
            <form action="/logs" method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="msg">Entry:</label><br />
                <textarea id="msg" name="entry" /><br /><br />

                <label htmlFor="bkn">Ship is broken:</label>
                <input type="checkbox" id="bkn" name="shipIsBroken" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;