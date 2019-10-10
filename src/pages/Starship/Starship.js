import React from 'react';
import { Link } from 'react-router-dom';
import './Starship.css';

const Starship = (props) => {
  const ship = props.getStarship(props.match.params.idx);
  return (
    <div className='Starship'>
      {ship ?
        <div className='Starship-starship'>
          <span>Name of Starship:</span>
          <span>{ship.name}</span>
          <span>Starship Model:</span>
          <span>{ship.model}</span>
          <Link
            to='/'>
            Home
          </Link>
        </div>
        :
        <h2>Loading Page...</h2>
      }
    </div>
  );
};

export default Starship;
