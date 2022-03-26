import React from 'react';

const userInput = (props) => {

    const style = {
        border: '2px solid red',
        borderRadius: '20px',
        padding: '10px',
        fontSize: '20px',
        outline: 'none'
    }
    return <input type='text'
    style={style}
    onChange={props.changed} 
    value= {props.currentName} />;
}

export default userInput;
