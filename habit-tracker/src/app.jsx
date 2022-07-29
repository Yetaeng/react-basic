import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits.jsx';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;
    this.setState({ habits });
  };

  handleDecrement = habit => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    const count = habits[idx].count - 1;
    habits[idx].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = habit => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(h => h.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
    );
  }
}

export default App;
