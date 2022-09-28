import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartModal = props => {
    const {cartItems} = props;
    return (
        <div className="cart-items">
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <div className="modal-action absolute right-4 top-4 mt-0 z-10">
                    <label htmlFor="my-modal" className="btn">X</label>
                </div>
                    <div className="card-list space-y-5">
                    {
                        cartItems.map(item => <CartItem item={item} key={item.id} />)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal;