import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        let name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = ''; // formRef를 이용해도 된다(정석)
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                    ref={this.inputRef}
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;