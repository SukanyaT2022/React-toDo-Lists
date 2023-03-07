import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Cards from './component/Cards';

const App = () => {
//2 state 1- is todo(addbox) and second- moretodo(below when add more box)
//useState use to call a function 
//below we use to do like empty buckeyt to hold value and use setTodo to change or update value inside todo
const [todo,setTodo] = useState("")

//then move from todo container line 13 to moretodo below line by using setMoreTodo --put in array look useSate([])
const [moretodo,setMoreTodo] = useState([])

//below we use this function addTodo to push from todo to Moretodo using setMoreTodo
const addTodo = ()=>{
  setMoreTodo([...moretodo, todo])
  // ...is spread Operator es6 means copy evertyhitng in the same array then add  new intem to it

}
console.log("moretodo",moretodo)
  return (
    <div className="mainBox" >
    
<Card style={{width :"800px", backgroundColor:"grey"  }}>
<h2 className='title'>To Do Lists</h2>
<div className='inputText'>
<InputGroup className="mb-3 ">
        <Form.Control class="inputB"
          placeholder="To Do" 
          //below line 13 todo name="todo"
          name="todo"
   value={todo}   
   //onchange is change value on the key board
   //e is event listener
//setTodo like like 13
   onChange={(e)=>{setTodo(e.target.value)}}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={addTodo}>
          {/* //{addTodo line 17 function} */}
       Add
        </Button>
      </InputGroup>
      </div>
      <Cards/>






</Card>
    </div>
  )
}

export default App

