import React from 'react';
import './ResyView.css';
import Card from '../Card/Card';

const ResyView = ({ bookings, deleteResy }) => {

  const bookingCards = bookings.map(booking => {
    return (
      <Card
        id={booking.id}
        key={booking.id}
        name={booking.name}
        date={booking.date}
        number={booking.number}
        time={booking.time}
        deleteResy={deleteResy}
      />
    )
  })
  return (
    <section className='booking-view'>
      {bookingCards}
    </section>
  )
}

export default ResyView;