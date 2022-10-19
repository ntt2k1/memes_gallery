import React, { useState } from 'react';

const Item = ({ item }) => {
  const [zoom, setZoom] = useState(false);
  const HandleEnter = () => {
    setZoom(true);
  };
  const HandleLeave = () => {
    setZoom(false);
  };

  return (
    <div
      className={`flex flex-col mb-10 scale-100 hover:scale-125 ease-in-out duration-1000n ${
        zoom && 'animate-spin'
      }`}
    >
      <img
        className="w-full rounded-3xl border-2"
        src={item.url}
        alt={item.name}
        loading="lazy"
        onMouseEnter={HandleEnter}
        onMouseLeave={HandleLeave}
      />
      <div className="font-extralight text-xl">{item.name}</div>
    </div>
  );
};

export default Item;
