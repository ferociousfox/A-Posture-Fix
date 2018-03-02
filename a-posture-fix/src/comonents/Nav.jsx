import React from 'react';

function Nav(){
  const linkDecoration = {
    textDecoration: 'none',
    backgroundColor: 'aliceBlue',
    padding: '10px',
    borderRadius: '5px'
  };
  return(
    <div className='nav'>
      <Link style={linkDecoration} to='/'><a>Program</a></Link>
      <Link style={linkDecoration} to='/setup'><a>Setup</a></Link>
      <Link style={linkDecoration} to='/examples'><a>Examples</a></Link>
      <Link style={linkDecoration} to='/resources'><a>Resources</a></Link>
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
