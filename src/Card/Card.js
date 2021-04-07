import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number, deleteResy }) => {

  return (
    <section className='card' id={id}>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button className='cancel-btn' onClick={() => deleteResy(id)}>Cancel</button>
    </section>
  )
}

export default Card;