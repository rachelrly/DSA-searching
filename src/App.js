import React, { useState } from 'react';
import BinarySearch from './BinarySearch';
import LinearSearch from './LinearSearch';
import './style.css';

function App() {
  const [arr, setArr] = useState([3, 5, 6, 8, 11, 12, 14, 15, 17, 18])
  return (
    <main>
      <h1>Binary vs. Linear Search</h1>
      <h2 className='arr'>[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]</h2>
      <section>
        <BinarySearch arr={arr} />
        <LinearSearch arr={arr} />
      </section>
    </main>
  );
}

export default App;
