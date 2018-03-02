import React from 'react';
import UIContainer from './UIContainer';

function App(){
  return(
    <div>
      <style global jsx>{`
        html, body, h1, h2, h3, p, ul, li{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
          list-style: none;
        }
        `}</style>
        <UIContainer />
      </div>
    );
  }

  export default App;
