import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import scify from '../data/scifi.json'
import romance from '../data/romance.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const MyLibrary = () => {
    return (
        <main>
            <Container>
                <h1>{fantasy.category}</h1>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        {fantasy.map((fantasy) => {
                            return (
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
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1>{history.category}</h1>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        {history.map((history) => {
                            return (
                                <Card>
                                    {console.log(history)}
                                    <Card.Img variant="top" src={history.img} />
                                    <Card.Body>
                                        <Card.Title>{history.title}</Card.Title>
                                        <Card.Text>
                                            {history.price}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1>{scify.category}</h1>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        {scify.map((scify) => {
                            return (
                                <Card>
                                    {console.log(scify)}
                                    <Card.Img variant="top" src={scify.img} />
                                    <Card.Body>
                                        <Card.Title>{scify.title}</Card.Title>
                                        <Card.Text>
                                            {scify.price}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1>{romance.category}</h1>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        {romance.map((romance) => {
                            return (
                                <Card>
                                    {console.log(romance)}
                                    <Card.Img variant="top" src={romance.img} />
                                    <Card.Body>
                                        <Card.Title>{romance.title}</Card.Title>
                                        <Card.Text>
                                            {romance.price}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1>{horror.category}</h1>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        {horror.map((horror) => {
                            return (
                                <Card>
                                    {console.log(horror)}
                                    <Card.Img variant="top" src={horror.img} />
                                    <Card.Body>
                                        <Card.Title>{horror.title}</Card.Title>
                                        <Card.Text>
                                            {horror.price}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
export default MyLibrary

