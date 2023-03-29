import { Col, Container, Row } from "react-bootstrap"

const MyFooter=()=>{
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        <div>
                            <p> &copy Flavio Ferrante</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default MyFooter