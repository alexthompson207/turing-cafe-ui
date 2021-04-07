import React, { Component } from 'react';
import './App.css';
import ResyView from '../ResyView/ResyView';
import Form from '../Form/Form';
import { getAllReservations, postReservation, deleteReservation } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookings: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllReservations()
      .then(bookings => this.setState({ bookings }))
      .catch(err => this.setState({ error: 'Opps, something went wrong' }))
  }

  addResy = (newResy) => {
    postReservation(newResy)
      .then(resy => {
        if (resy.id) {
          this.setState({ bookings: [...this.state.bookings, resy], error: '' });
        } else {
          this.setState({ error: 'Please enter the correct inputs' });
        }
      })
  }

  deleteResy = (id) => {
    deleteReservation(id)
      .then(resy => {
        if (resy.ok) {
          const filteredResys = this.state.bookings.filter(booking => booking.id !== id);
          this.setState({ bookings: filteredResys });
        } else {
          this.setState({ error: 'There was an issue canceling this reservation' });
        }
      })
  }

  render() {
    return (
      <div className="App">
        <main>
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <Form addResy={this.addResy} />
          {this.state.error && <h2 className='error'>{this.state.error}</h2>}
          <ResyView bookings={this.state.bookings} deleteResy={this.deleteResy} />
        </main>
      </div>
    )
  }
}

export default App;

