import { constants } from 'buffer';
import React from 'react';

const CenterSquare: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <div
    className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
    {...props}
  >
    {children}
  </div>
);

export default CenterSquare;
