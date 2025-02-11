import React from 'react';
import '../css/Screen.css';

// Componente definido como un arrow function.
const Screen = ({ input }) => (
  <div className='screen'>
    {input}
  </div>
);

export default Screen