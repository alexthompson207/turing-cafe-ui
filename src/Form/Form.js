import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
        />
        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
        />
        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
        />
        <input
          type='text'
          name='number'
          placeholder='Number of guests'
          value={this.state.number}
        />
        <button className='resy-btn'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;