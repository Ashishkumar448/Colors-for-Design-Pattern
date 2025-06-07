import React from 'react'
import colors from '/src/patColors.json';
import SingleCard from './SingleCard.jsx';

const CardRow = () => {
  return (
    <div className="p-6 space-y-8 ">
      {Object.entries(colors).map(([colorName, colorObj]) => (
        
        

        <div
  key={colorName}
  className="border border-solid border-gray-500 rounded-md p-4 shadow-md overflow-hidden"
>
  <h2 className="text-xl font-semibold mb-4">{colorName}</h2>

  <div className="flex flex-col gap-4 md:grid md:grid-cols-[auto_1fr] md:gap-6">
    {/* Main Card - full width on mobile, fixed size on desktop */}
    {/* Main Card - full width on mobile, fixed size on desktop */}
<div className="w-full md:w-[150px]">
  <SingleCard label="Main" hex={colorObj.color} square={false} />
</div>


    {/* Shade Cards - 3x3 grid on mobile, evenly spread on desktop */}
    <div className="grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {Object.entries(colorObj.shades).map(([shade, hex]) => (
        <SingleCard key={shade} label={shade} hex={hex} />
      ))}
    </div>
  </div>
</div>


      ))}
    </div>
  );
};


export default CardRow