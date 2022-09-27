import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import CartModal from './components/CartModal/CartModal';
import Navbar from './components/Navbar/Navbar';
import addToDb from './utilities/fakedb';

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const oldCartItems = getFromDb();
  
  // const addToCart = gunItem => {
    
  //   if (gunItem) {
  //       const isOnCart = cartItems.some(item => item.id === gunItem.id);
  //       if (isOnCart) {
  //         console.log('yes')
  //         return
  //       } else {
  //         const newCart = [...cartItems, gunItem];
  //         setCartItems(newCart);
  //       }
  //     }
  //   }

  const addToCart = gunItem => {
     const product = {
      name: gunItem,
      quantity: 1
    }

    const isOnCart = cartItems.some(item => item.name.id === product.name.id);

    let newCart = null;
    if (isOnCart) {
      product.quantity++;
      newCart = [...cartItems, product];
      console.log(product.quantity);
    } else {
      newCart = [...cartItems, product];
    }
    // else {
      // }
    setCartItems(newCart);
    addToDb(product);
    
    // console.log(cartItems)
    // console.log(isOnCart);

    // setCartItems(product);


    // if (gunItem) {
    //   const isOnCart = cartItems.some(item => item.id === gunItem.id);
    //   if (isOnCart) {
    //     console.log('yes')
    //     return
    //   } else {
    //     const newCart = [...cartItems, gunItem];
    //     setCartItems(newCart);
    //   }
    // }
  }
  // addToCart();
  return (
    <div className="App">
      <Navbar gunCount={cartItems.length} />
      <AllGuns addToCart={addToCart}/>
      <CartModal cartItems={cartItems} />
    </div>
  );
}

export default App;
