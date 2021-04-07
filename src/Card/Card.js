import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number }) => {

  return (
    <section className='card' id={id}>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button className='cancel-btn'>Cancel</button>
    </section>
  )
}

export default Card;

// [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]
