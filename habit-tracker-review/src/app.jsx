import React, { PureComponent } from 'react';
import HabitsEdit from './components/habitsEdit';
import Navbar from './components/navbar';
import './app.css';

class App extends PureComponent {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Riding", count: 0 },
      { id: 3, name: "Studing", count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: item.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count > 0 ? count : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDeletion = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };
  handleAdd = name => {
    const habit = {
      id: Date.now(),
      name,
      count: 0,
    };
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return {...item, count: 0}
      }
      return item;
    })
    this.setState({ habits })
  }


  render() {
    return (
      <>
        <Navbar totalCount={ this.state.habits.filter(habit => (habit.count > 0)).length }/>
        <HabitsEdit
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDeletion={this.handleDeletion}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;