import { Button, Card } from "react-bootstrap";

const ProductSingle = (props) => {
  const { title, price, description, image, rating } = props;
  const product = props;

  return (
    <Card style={{ width: "18rem", padding: "1rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Price: ${price}
          <br />
          Rating: {rating.rate}
          <br />
          {description}
        </Card.Text>
        <Button variant="primary">Add Product to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductSingle;
