import React from 'react';
import PropTypes from 'prop-types';

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

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
