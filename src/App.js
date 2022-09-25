import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [gunCount, setGunCount] = useState(0);
  const addToCart = () => setGunCount(gunCount + 1);


  return (
    <div className="App">
      <Navbar gunCount={gunCount} />
      <AllGuns addToCart={addToCart} />
    </div>
  );
}

export default App;
