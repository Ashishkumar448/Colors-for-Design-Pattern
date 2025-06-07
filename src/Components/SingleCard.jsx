import React from 'react';

const SingleCard = ({ label, hex , square = true }) => {
  return (
    <div
      className={
        `border border-gray-300 rounded-md shadow-sm flex flex-col items-center justify-center p-4 ` +
        (square ? 'aspect-square' : 'h-auto')
      }
    >
      <div
        className="w-full h-16 rounded-md"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-700">{label}</p>
        <p className="text-xs text-gray-500">{hex}</p>
      </div>
    </div>
  );
};


export default SingleCard;