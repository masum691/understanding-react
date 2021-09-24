import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div>
            <h1>My name {props.name}</h1>
            <Config price={props.price} />
        </div>
    );
};

export default Device;
