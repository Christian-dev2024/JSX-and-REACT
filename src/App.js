import './App.css';
import React, { useState } from 'react';
import Name from './Name';
import Price from './Price';
import Description from './description'; 
import Image from './Image'; 



  const firstName = 'Christian'

  const App =()=> {
      return (
        <>
        <div className="container">
              <Name />
              <Price />
              <Description />
        </div>
          <p>Bonjour, {firstName || '!'}</p>
          {firstName &&  <Image/>}
        </>
      );
}

export default App;
