import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;
    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    const count = habits[idx].count - 1;
    habits[idx].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(h => h.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habit = {
      id: Date.now(),
      name,
      count: 0
    }
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  }

  render() {
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
      />
      </>
    );
  }
}

export default App;
