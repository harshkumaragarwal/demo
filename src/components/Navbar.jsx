import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-collapse fixed-top navbar-expand-lg navbar-dark bg-dark"
    >
      <Container fluid>
        <Navbar.Brand>Harsh Enterprises</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/park-avenue">Park Avenue</Nav.Link>
            <Nav.Link href="/kama-sutra">Kama Sutra</Nav.Link>
            <Nav.Link href="/gits">Gits</Nav.Link>
            <Nav.Link href="/weikfield">Weikfield</Nav.Link>
            <Nav.Link href="/bonne">Bonne</Nav.Link>
            <Nav.Link href="/others">Others</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
