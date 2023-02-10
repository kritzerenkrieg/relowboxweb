import React, { FC } from 'react';

interface LabelProps {
  label: string;
  inputId: string;
  inputType?: string;
}

const Label: FC<LabelProps> = ({ label, inputId, inputType = 'text' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label className='mt-6 mb-2' htmlFor={inputId}>
      {label}
    </label>      <input type={inputType} step='any' id={inputId} style={{ border: '2px solid grey', padding: '8px' }}/>

    </div>
  );
};

export default Label;