import Card from 'react-bootstrap/Card';
//moretodo function display here
//more2do from line 56 on app.js
//bring more2do as prop
function Cards({ more2do }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* below if javascript map fuction  */}
        {more2do.map((m) => {
          return (
            <ul>
              <li>{m}</li>
            </ul>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Cards;
