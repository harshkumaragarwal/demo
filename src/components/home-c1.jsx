import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Immage from "react-bootstrap/Image";

export function FluidExample() {
  return <Immage className="imgg" src="https://picsum.photos/200/300" fluid />;
}


export function HeaderAndFooterExample() {
  return (
    <Card className="text-center" >
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <img src="https://picsum.photos/300"  alt="pic of prod "></img>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
