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

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  createNewResy = (event) => {
    event.preventDefault();
    const { name, date, time, number } = this.state;
    const newResy = {
      id: Date.now(),
      name,
      date,
      time,
      number: Number(number)
    }
    this.props.addResy(newResy);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form className='resy-form'>
        <input
          className='form-input'
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleInput}
        />
        <input
          className='form-input'
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={this.handleInput}
        />
        <input
          className='form-input'
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={this.handleInput}
        />
        <input
          className='form-input'
          type='text'
          name='number'
          placeholder='Number of guests'
          value={this.state.number}
          onChange={this.handleInput}
        />
        <button className='resy-btn' onClick={this.createNewResy}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;