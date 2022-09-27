const addToDb = product => {

    const oldCart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemOnCart = oldCart.find(item => item.name.id === product.name.id);

    let cart = null;
    if (itemOnCart) {
        itemOnCart.quantity++;
        cart = oldCart;
    } else {
        cart = [...oldCart, product];
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

export default addToDb;