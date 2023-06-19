import '../style/Movie.scss'
import Col from "react-bootstrap/Col";

const Movie = (props) => {
  return (
    <Col className='movie' xs={12} md={6} lg={3} xxl={2}>
    <img src={props.movie.Poster} alt={props.movie.Title} />
    </Col>
  );
};

export default Movie;
