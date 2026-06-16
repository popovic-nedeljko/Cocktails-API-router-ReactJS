import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <div className='cocktail-meta'>
          <div>
            <h3 className='cocktail-name'>{name}</h3>
            <p className='cocktail-glass'>{glass}</p>
          </div>
          <span className='cocktail-badge'>{info}</span>
        </div>
        <Link to={`/cocktail/${id}`} className='btn-details'>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
