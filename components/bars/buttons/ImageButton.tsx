import React from 'react';
interface ImageButtonProps {
    imageSrc: string;
    text: string;
    onClick: () => void;
  }
  
  const ImageButton = ({ imageSrc, text, onClick }: ImageButtonProps) => {
    return (
    <div className='ImageButtonBoxStyle'>
        <button onClick={onClick} className="flex items-center">
        <img src={imageSrc} alt="" className="mr-3" />
            <div className='subtitle text-gray-500 hover:text-gray-700' style={{ padding: '0 10px'}}>
            {text}
            </div>
        </button>
    </div>
  );
};

export default ImageButton;