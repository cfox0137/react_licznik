import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';

import todolist from './components/toodolist/todolist.js';



function App() {
  const [number, setnumber] = useState(0);
    return (
    <div className="App">
      
      <div>{number}</div>    
      
    <button onClick={()=> setnumber(number +1)}>
    +
    </button>    
      <button onClick={()=> setnumber(number -1)}>-</button>
      
      <toDoList></toDoList>
      
      </div>

    
  );
}

export default App;
