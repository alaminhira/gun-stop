import React from 'react';

const CartItem = props => {
    const {item} = props;
    return (
        <div className="card card-side border-b">
            <figure className='w-40'><img className='w-full' src={item.img} alt={item.category}/></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.action}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">${item.price}</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;