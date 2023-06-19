import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

function MyFooter() {
  return (
    <Container className="mb-1 d-none d-lg-block">
      <Row className="justify-content-center mx-5 mb-3">
        <Col>
          <h5>Company</h5>
          <ListGroup>
            <ListGroup.Item className="bg-dark text-secondary">About Us</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Jobs</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Contact Us</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Blog</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5>Help</h5>
          <ListGroup>
            <ListGroup.Item className="bg-dark text-secondary">About Us</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Jobs</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Contact Us</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Blog</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5>Legal</h5>
          <ListGroup>
            <ListGroup.Item className="bg-dark text-secondary">Terms of Use</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Privacy Policy</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Cookie Policy</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary">Legal Notices</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5>Social</h5>
          <ListGroup>
            <ListGroup.Item className="bg-dark text-secondary"><Facebook />Facebook</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary"><Instagram />Instagram</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary"><Twitter />Twitter</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-secondary"><Youtube />Youyube</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col xs={4}>
          <Button type="button" className="btn mb-3 bg-dark text-secondary border border-secondary rounded-0 p-1">
            Service Code
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col xs={6}>
          <p className="bg-dark text-secondary">&copy; 1997-2023 Netflix, Inc. (8473r90efgy9304e)</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;