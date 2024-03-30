import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '20rem' , backgroundColor : '#dff'}} className='m-3'>
      <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/850/1000/l08gsy80/poster/j/p/r/small-nature-s-poster-for-wall-wonderfull-nature-a3-posters-for-original-imagc26whtyakdbm.jpeg?q=90&crop=false" className='' />
      <Card.Body>
        <Card.Title>Beautiful Nature Picture</Card.Title>
        <Card.Text>
          The times I spend in nature are some of the moments I feel most alive.
        </Card.Text>
        <Button variant="success">Let's Go!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;