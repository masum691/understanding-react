import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h1>My name {props.name}</h1>
            <h4>Current steps: {props.steps}</h4>
            <Config price={props.price} steps={props.steps} />
            
        </div>
    );
};

export default Device;
