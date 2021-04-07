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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ResyView bookings={this.state.bookings} />
        </div>
      </div>
    )
  }
}

export default App;

