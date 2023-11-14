import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({name, price, description, imgUrl}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;