import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./Cards.css";
//moretodo function display here
//more2do from line 56 on app.js
//bring more2do as prop
function Cards({ more2do,deleteTwoDo }) {
  // more2do and delete is name from App.js page line 71

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* below if javascript map fuction  */}
        {more2do.map((m) => {
          return (
            <ul>
              <div className='mainBox'>
             <div className='list'>{m}</div>
             <div className='deleteButton' ><Button variant="success" onClick={()=>{deleteTwoDo(m)}}>Delete</Button></div>
            {/* delete come from name App.js page line 71 and this page line 7 in () */}
             </div>
            </ul>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Cards;
