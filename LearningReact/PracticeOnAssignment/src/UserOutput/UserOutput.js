import React from 'react';
import './useroutput.css';

const userOutput = (props) => {
    return  (
        <div className='UserOutput'>
            <p>Username: {props.userName}</p>
            <p>This is an assignment Work For Practice</p>
        </div>
    )
}

export default userOutput;