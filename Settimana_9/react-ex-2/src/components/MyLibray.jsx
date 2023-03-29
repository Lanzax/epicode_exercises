import fantasy from '../data/fantasy.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const MyLibrary = () => {
    return (
        <main>
            <Container>
                <h1>{fantasy.category}</h1>
                <Row className='justify-content-between'>
                    
                        {fantasy.map((fantasy) => {
                            return (
                                <Col xs={12} md={4} lg={3} xl={2} className='my-3'>
                                <Card>
                                    {console.log(fantasy)}
                                    <Card.Img variant="top" src={fantasy.img} />
                                    <Card.Body>
                                        <Card.Title>{fantasy.title}</Card.Title>
                                        <Card.Text>
                                            {fantasy.price}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </main>
    )
}
export default MyLibrary

