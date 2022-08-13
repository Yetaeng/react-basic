import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class HabitsEdit extends Component {
  render() {
    return (
      <div className='habits'>
        <HabitAddForm onAdd={this.props.onAdd}></HabitAddForm>
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDeletion={this.props.onDeletion}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </div>
    );
  }
}

export default HabitsEdit;