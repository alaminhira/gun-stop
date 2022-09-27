import React from 'react';
import { add } from '../../utilities/calculate';
import Cosmetics from '../Cosmetics/Cosmetics';

const Ornaments = () => {
    return (
        <div>
            <h3>price of ornaments: {add(5, 6)}</h3>
            <Cosmetics />
        </div>
    );
};

export default Ornaments;