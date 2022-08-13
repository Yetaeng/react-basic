import React, { Component } from 'react';

class Habit extends Component {
  
  handleIncrement = () => {
    return this.props.onIncrement(this.props.habit);
  }
  handleDecrement = () => {
    return this.props.onDecrement(this.props.habit);
  }
  handleDeletion = () => {
    return this.props.onDeletion(this.props.habit);
  }

  render() {
    return (
      <li className='habit'>
        <span className='habit-name'>{this.props.habit.name}</span>
        <span className="habit-count">{this.props.habit.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fa-solid fa-square-plus">+</i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fa-solid fa-square-minus">-</i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDeletion}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;