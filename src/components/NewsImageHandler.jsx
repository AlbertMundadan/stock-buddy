import React from 'react';

const NewsImageHandler = ({imgURL}) => {
  return (
    <div className="flex justify-center items-center rounded-2xl overflow-hidden w-68 h-28">
      <img 
        src={imgURL}
        alt="Insert Default image here"
        className=""
      />
    </div>
  );
}

export default NewsImageHandler;