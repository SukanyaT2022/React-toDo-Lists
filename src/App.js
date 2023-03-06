import React from 'react'
import { Card } from 'react-bootstrap'
import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Cards from './component/Cards';

const App = () => {
  return (
    <div className="mainBox" >
    
<Card style={{width :"800px", backgroundColor:"grey"  }}>
<h2 className='title'>To Do Lists</h2>
<div className='inputText'>
<InputGroup className="mb-3 ">
        <Form.Control 
          placeholder="To Do" 
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
      </div>
      <Cards/>






</Card>
    </div>
  )
}

export default App

