import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import CartModal from './components/CartModal/CartModal';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = gunItem => {

    const isOnCart = cartItems.some(item => item.id === gunItem.id);
    if (isOnCart) {
        return;
      } else {
        const newCart = [...cartItems, gunItem];
        setCartItems(newCart);
      }
  }

  return (
    <div className="App">
      <Navbar gunCount={cartItems.length} />
      <AllGuns addToCart={addToCart}/>
      <CartModal cartItems={cartItems} />
    </div>
  );
}

export default App;
