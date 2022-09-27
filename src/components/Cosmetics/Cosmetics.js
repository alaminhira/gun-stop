import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Cosmetics = () => {
    return (
        <div>
            <h2>Price: {add(5, 2)}</h2>
            <h2>Multiplication: {multiply(3, 7)}</h2>
        </div>
    );
};

export default Cosmetics;