import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add, multiply } from '../../utilities/Storage';
// import {add, multiply} from '../../utilities/Storage'

const Cosmetics = () => {
    // const first = 34;
    // const second = 645;
    // const sum = add(first, second);
    // const mul = multiply(first, second);

    // const cosmetics = () => [
    //     {id: 1, name: 'lipstic', price: 130},
    //     {id: 2, name: 'nailpalis', price: 230},
    //     {id: 3, name: 'tip', price: 304},
    //     {id: 4, name: 'kumkum', price: 290},
    //     {id: 5, name: 'churi', price: 1130},
    //     {id: 6, name: 'mala', price: 3320}
    // ]

    const [cosmetics, setCosmetics] = useState([]);
    useEffect( () => {
        fetch('./cosmetics.json')
        // fetch('../../../public/cosmetics.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h2>Cosmetis shop</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id} 
                    cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;