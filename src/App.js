import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  // Mock user data
  const [userData, setUserData] = useState({
    name: "Daniel",
    surname: "Doe",
    date_of_birth: "1990-01-01",
    address: "123 Main St",
    country: "USA",
    email: "john@example.com",
    telephone: "123-456-7890",
    company: "XYZ Corp",
    shopping_cart: [
      { name: "Product 1", price: 400 },
      { name: "Product 2", price: 20 }
    ]
  });

  // State to track if user is currently editing
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle save button click
  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you can implement logic to save the updated user data
    console.log("User data saved:", userData);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">User Information</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>User Information</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Name:</strong> {isEditing ? <input type="text" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} /> : userData.name}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Surname:</strong> {isEditing ? <input type="text" value={userData.surname} onChange={(e) => setUserData({ ...userData, surname: e.target.value })} /> : userData.surname}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Date of Birth:</strong> {isEditing ? <input type="text" value={userData.date_of_birth} onChange={(e) => setUserData({ ...userData, date_of_birth: e.target.value })} /> : userData.date_of_birth}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Address:</strong> {isEditing ? <input type="text" value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} /> : userData.address}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Country:</strong> {isEditing ? <input type="text" value={userData.country} onChange={(e) => setUserData({ ...userData, country: e.target.value })} /> : userData.country}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Email:</strong> {isEditing ? <input type="text" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /> : userData.email}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Telephone:</strong> {isEditing ? <input type="text" value={userData.telephone} onChange={(e) => setUserData({ ...userData, telephone: e.target.value })} /> : userData.telephone}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col sm={6}>
                        <strong>Company:</strong> {isEditing ? <input type="text" value={userData.company} onChange={(e) => setUserData({ ...userData, company: e.target.value })} /> : userData.company}
                      </Col>
                      <Col sm={6} className="text-right">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {/* Add similar ListGroup.Items for other fields */}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Shopping Cart</Card.Title>
                <ListGroup variant="flush">
                  {userData.shopping_cart.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col sm={8}>
                          {item.name}
                        </Col>
                        <Col sm={4} className="text-right">
                          ${item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {isEditing && (
          <Row className="justify-content-center mt-4">
            <Col md={8} className="text-center">
              <Button variant="primary" onClick={handleSaveClick}>Save</Button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
