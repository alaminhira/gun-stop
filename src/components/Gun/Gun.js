import React from 'react';

const Gun = (props) => {
    console.log(props);
    const {img, name, action, category, price, bullet} = props.gun;
    const {addToCart} = props;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-64' src={img} alt={category} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{action}</p>
                <div className="card-actions">
                    <div className="badge badge-outline">${price}</div> 
                    <div className="badge badge-outline">{bullet}</div>
                </div>
                <div className='space-x-4 mt-4'>
                    <button className='btn btn-sm btn-primary' onClick={addToCart}>Add to Cart</button>
                    <button className='btn btn-sm btn-secondary'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gun;