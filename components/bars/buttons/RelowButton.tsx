import React from 'react';
interface RelowButtonProps {
    imageSrc: string;
    text: string;
    onClick: () => void;
  }
  
  const RelowButton = ({ imageSrc, text, onClick }: RelowButtonProps) => {
    return (
    <div className='RelowButtonBoxStyle'>
        <button onClick={onClick} className="flex items-center">
            <div className='text-gray-100 hover:text-gray-300' style={{ padding: '0 10px'}}>
            {text}
            </div>
        </button>
    </div>
  );
};

export default RelowButton;