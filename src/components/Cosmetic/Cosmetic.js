import React from 'react';

const Cosmetic = (props) => {
    // console.log(props.cosmetic)
    const {name, age, gender, email, company, balance} = props.cosmetic;
    return (
        <div>
            <h4>Name: {name}</h4>
            <h5>Name: {age}</h5>
            <h5>Name: {gender}</h5>
            <h5>Name: {email}</h5>
            <h5>Name: {company}</h5>
            <h4>Name: {balance}</h4>

        </div>
    );
};

export default Cosmetic;