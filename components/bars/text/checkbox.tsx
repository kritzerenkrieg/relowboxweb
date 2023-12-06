import React, { FC } from 'react';

interface CheckboxProps {
  label: string;
  id: string; 
}

const Checkbox: FC<CheckboxProps> = ({ label, id }) => {
  return (
    <div className='m-4' style={{ display: 'flex', alignItems: 'center' }}>
      <input type="checkbox" id={id} />
      <label htmlFor={id} style={{ marginLeft: '8px' }}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;