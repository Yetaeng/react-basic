import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); // 해당 컴포넌트에서 add하려면 state가 중복으로 필요하므로 이름만 전달해주자
    this.formRef.current.reset();
  }

  render() {
    return (
      <>
        <form className='add-form' onSubmit={this.onSubmit} ref={this.formRef}>
          <input type="text" className="add-input" placeholder='Habit' ref={this.inputRef}/>
          <button className="add-button">Add</button>
        </form>
      </>
    );
  }
}

export default HabitAddForm;