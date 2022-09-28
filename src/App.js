import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import CartModal from './components/CartModal/CartModal';
import Navbar from './components/Navbar/Navbar';
// import addToDb from './utilities/fakedb';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = gunItem => {
    const selectedItem = cartItems.find(item => item.id === gunItem.id);
    const restItems = cartItems.filter(item => item.id !== gunItem.id);

    // When item is already in the cart
    let newCart = null;
    if (selectedItem) {
      selectedItem.quantity++;
      newCart = [...restItems, selectedItem];

      // When item in new on the cart
    } else {
      gunItem.quantity = 1;
      newCart = [...restItems, gunItem];
    }

    setCartItems(newCart);
  }

  
  
  
  return (
    <div className="App">
      <Navbar cartItems={cartItems} />
      <AllGuns addToCart={addToCart}/>
      <CartModal cartItems={cartItems} />
    </div>
  );
}

export default App;