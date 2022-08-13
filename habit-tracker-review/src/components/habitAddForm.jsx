import React, { Component } from 'react';

class HabitAddForm extends Component {
  myRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.myRef.current.value;
    name && this.props.onAdd(name); // 해당 컴포넌트에서 add하려면 state가 중복으로 필요하므로 이름만 전달해주자
    this.myRef.current.value = ''; // name은 ref의 문자열만 담고있는 변수일 뿐이라서 이를 초기화한다고 UI가 업데이트 되지는 않는다.
    this.myRef.current.focus();
  }

  render() {
    return (
      <>
        <form className='add-form' onSubmit={this.onSubmit}>
          <input type="text" className="add-input" placeholder='Habit' ref={this.myRef}/>
          <button className="add-button">Add</button>
        </form>
      </>
    );
  }
}

export default HabitAddForm;