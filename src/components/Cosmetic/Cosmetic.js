import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    // console.log(props.cosmetic)
    const {_id, name, age, gender, email, company, balance} = props.cosmetic;
    const handlePurchase = id => {
        // set to local storage
        console.log(id)
        addToDb(id)
    }
    const handleRemove = id => {
        removeFromDb(id)
    }
    // const withParam = (id) => handlePurchase(id)
    return (
        <div className="cosmetic">
            <p style={{color: 'yellow'}}>Id: {_id}</p>
            <h2 className="name">Name: {name}</h2>
            <h4>Age: {age}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Email: {email}</h4>
            <h4>Company: {company}</h4>
            <h3>Balance: {balance}</h3>
            <button onClick={ () => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;