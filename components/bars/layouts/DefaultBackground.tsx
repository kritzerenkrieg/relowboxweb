import { constants } from 'buffer';
import React from 'react';

const DefaultBackground: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <div
    className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
    {...props}
  >
    {children}
  </div>
);

export default DefaultBackground;
