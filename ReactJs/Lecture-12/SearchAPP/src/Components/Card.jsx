import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import recipes from '../recipes.json'

function Card1() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <div>
    {recipes.map((recipe, index) => (
      <div key={index}>
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} />
        {/* Add more components to display the rest of the recipe information */}
      </div>
    ))}
  </div>
  </>
  );
}

export default Card;