import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <i className="fa-solid fa-leaf navbar-logo"></i>
                <span>Habit Tracker</span>
                <span className='navbar-count'>{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;