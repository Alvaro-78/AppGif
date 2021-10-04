import React from 'react';

const GifGridItem = ({ title, url }) => {
  return (
    <>
      <div className='card animate__animated animate__fadeIn'>
        <img className='img' src={url} alt={title}></img>
        <p className='card-title'>{title}</p>
      </div>
    </>
  );
};

export default GifGridItem;
