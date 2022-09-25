import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Gun from '../Gun/Gun';

const AllGuns = props => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data));
    }, []);

    const {addToCart} = props;

    return (
        <section className='py-20'>
           <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold mb-3">Welcome to Gun Stop...</h1>
                    <p className='max-w-3xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis, voluptates animi sapiente facere doloribus nesciunt aliquid incidunt, hic culpa maxime. Nobis facilis quibusdam nulla!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        guns.map(gun => <Gun gun={gun} key={gun.id} addToCart={addToCart} />)
                    }
                </div>
           </div>
        </section>
    );
};

export default AllGuns;