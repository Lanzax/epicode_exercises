
import Nav from 'react-bootstrap/Nav';


const MyNav=()=> {
    return (
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="#">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="#">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="#">Browse</Nav.Link>
                        </Nav.Item>
                    </Nav>
            );
}
export default MyNav


