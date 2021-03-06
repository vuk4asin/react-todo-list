import React, { Component } from 'react';
import {v1 as uuid} from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


class App extends Component{
  state={
    items: 
    [
      {id: 1,title: "wakeup"} ,
      {id: 2,title:"make brekfast"}
    ],
     id: uuid(),
     item:'',
     editItem:false
  };

  handleChange = (e)=>{ console.log('Handle change')}
  handleSubmit = (e)=>{ console.log('Handle Submit')}
  clearList = ()=> {console.log('clearList')}
  handleDelete=(id)=> {console.log(`handle edit ${id}`)}

  render() {
    console.log(this.state);

  return (
    
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-5">
      <h3 className="text-capitalize text-center">todo input</h3>
        <TodoInput 
        item={this.state.item}  
        handleChange={this.handleChange}
         handleSubmit={this.handleSubmit} 
         editItem={this.state.editItem}
         />
        <TodoList
         items ={this.state.items} 
         clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
           />
      </div>    
      </div>
      </div>
 
    );
  }
}

export default App;
