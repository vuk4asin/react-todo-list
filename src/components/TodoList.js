 import React, { Component } from 'react';
 import Item from "./TodoItem";
 export default class TodoList extends Component{
     render(){
         return(
             <section>
                 <h2>
                     Hello from To do List
                 </h2>
                 <Item></Item>
             </section>
         )
     }
 }