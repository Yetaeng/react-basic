import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        let name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = ''; // formRef를 이용해도 된다(정석)
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input
                type="text"
                className="add-input"
                placeholder="Habit"
                ref={inputRef}
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
