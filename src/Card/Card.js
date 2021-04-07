import React from 'react';
import './Card.css';

const Card = () => {

  return (
    <section className='card'>
      <h3>name</h3>
      <p>date</p>
      <p>time</p>
      <p>Number of guests: number</p>
      <button>Cancel</button>
    </section>
  )
}

export default Card;

// [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]
