import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


class App extends Component{
  render() {
  return (
    <div>
      <div className="container">
        <div className="row">
            
            <TodoList>
            <TodoInput>
              
            </TodoInput>
            </TodoList>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
