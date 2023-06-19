import '../style/MyNavbar.scss'
import { Search, Bell } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyNavbar() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant='dark' expand="lg" className='m3 my-navbar row'>
        <Row className='mx-0 justify-content-between'>
          <Col className='p-0 text-start' xs={{ span: 8, order: 0 }} sm={{ span: 2, order: 0 }} lg={{ span: 2, order: 0 }}>
            <Navbar.Brand><img className='img-logo p-0' src="/assets/img/netflix_logo.png" alt="Netflix Logo" /></Navbar.Brand>
          </Col>
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 8, order: 1 }} lg={{ span: 8, order: 1 }}>
            <Nav className="me-auto">
              <Nav.Link className='me-3 d-none d-lg-block' href="#">Home</Nav.Link>
              <Nav.Link className='me-3' href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link className='me-3 d-none d-lg-block' href="#">My List</Nav.Link>
            </Nav>
          </Col>
          <Col xs={{ span: 4, order: 1 }} sm={{ span: 2, order: 2 }} lg={{ span: 2, order: 2 }}>
            <Nav>
              <Nav.Link className='me-2' href="#"> <Search /> </Nav.Link>
              <Nav.Link className='me-2' href="#">KIDS</Nav.Link>
              <Nav.Link className='me-2' href="#"><Bell></Bell></Nav.Link>
              <Nav.Link className='me-2' href="#"><img className="img-avatar" src="/assets/img/avatar.png" alt="Kids Icon" /></Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar >
    </Container>
  );
}

export default MyNavbar;