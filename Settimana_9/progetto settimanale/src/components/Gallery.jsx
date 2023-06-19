import '../style/Gallery.scss'
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Movie from "./Movie";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Gallery extends Component {
    state = {
        movies: [],
        isLoading: true,
        isError: false,
    }

    getAllMovies = async () => {
        try {
            let response = await fetch(this.props.source);
            if (response.ok) {
                let data = await response.json()
                console.log(data);
                this.setState({
                    movies: data.Search,
                    isLoading: false,
                })
            } else {
                console.log('Errore nella chiamata');
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            }
        } catch (error) {
            console.err(error);
            this.setState({
                isLoading: false,
                isError: true,
            })
        }
    }

    componentDidMount() {
        this.getAllMovies()
    }

    render() {
        const responsive = {
            xxl: {
                breakpoint: { max: 3000, min: 1400 },
                items: 6,
                slidesToSlide: 1
            },
            xl: {
                breakpoint: { max: 1400, min: 1200 },
                items: 5,
                slidesToSlide: 1
            },
            large: {
                breakpoint: { max: 1200, min: 992 },
                items: 4,
                slidesToSlide: 1
            },
            medium: {
                breakpoint: { max: 992, min: 768 },
                items: 3,
                slidesToSlide: 1
            },
            small: {
                breakpoint: { max: 768, min: 576 },
                items: 2,
                slidesToSlide: 1
            },
            xs: {
                breakpoint: { max: 576, min: 0 },
                items: 1,
                slidesToSlide: 1
            }
        };
        return (
            <Container fluid className="gallery">
                <Row className="justify-content-center mt-3 mx-0">
                    <Col>
                        <h2 className="text-light text-left">{this.props.title}</h2>

                        {this.state.isError && (
                            <Alert variant="danger">Qualcosa è andato storto :(</Alert>
                        )}

                        {this.state.isLoading && (
                            <div className="text-center">
                                <Spinner animation="border" role="status" variant="success">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        )}
                        <Carousel
                            responsive={responsive}
                            ssr
                            keyBoardControl
                            infinite
                            transitionDuration={100}
                            removeArrowOnDeviceType={['tablet', 'mobile']}
                            beforeChange={() => console.log('Before change')}
                            afterChange={() => console.log('After change')}
                        >
                            {this.state.movies.map(movie => (
                                <Movie key={movie.imdbID} movie={movie} />
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Gallery;