import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  const linkDecoration = {
    textDecoration: 'none',
    backgroundColor: 'aliceBlue',
    padding: '10px',
    borderRadius: '5px'
  };
  return(
    <div className='nav'>
      <Link style={linkDecoration} to='/'>Program</Link>
      <Link style={linkDecoration} to='/setup'>Setup</Link>
      <Link style={linkDecoration} to='/examples'>Examples</Link>
      <Link style={linkDecoration} to='/resources'>Resources</Link>
      <style jsx>{`
        a:hover {
          color: crimson;
        }
        .nav {
          font-size: 20px;
          padding: 20px;
        }
     `}</style>
    </div>
  );
}

export default Nav;
