import React from 'react';

interface LineTextInput {
  text: string;
}
const LineWithText = ({ text }: LineTextInput) => {
  return (
    <div className='p-2' style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, height: 2, backgroundColor: 'gray' }} />
      <div className='subtitle' style={{ padding: '0 10px' }}>{text}</div>
      <div style={{ flex: 1, height: 2, backgroundColor: 'gray' }} />
    </div>
  );
};

export default LineWithText;