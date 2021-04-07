import React, { Component } from 'react';
import './App.css';
import ResyView from '../ResyView/ResyView';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookings: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(bookings => this.setState({ bookings }))
      .catch(err => this.setState({ error: 'Opps, something went wrong' }))
  }

  addResy = (newResy) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newResy)
    })
      .then(response => response.json())
      .then(resy => {
        if (resy.id) {
          this.setState({ bookings: [...this.state.bookings, resy], error: '' })
        } else {
          this.setState({ error: 'Please enter the correct inputs' })
        }
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addResy={this.addResy} />
        </div>
        <div className='resy-container'>
          <ResyView bookings={this.state.bookings} />
        </div>
      </div>
    )
  }
}

export default App;

