import React from 'react';

const GoogleRegister = () => {
  const GoogleRegisterClicked = () => {
    console.log('Button was clicked!')  ;
  };
  return (
<div>
    <button onClick={GoogleRegisterClicked}>
    <img
    src="/google.svg"
    alt="google"
    style={{ display: 'block', cursor: 'pointer' }}
    />
    </button>
</div>
  )
};

export default GoogleRegister;