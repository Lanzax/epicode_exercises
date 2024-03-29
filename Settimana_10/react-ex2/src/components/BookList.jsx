import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = () => {
  // state = {
  //   searchQuery: "",
  //   selectedBook: null,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selcetedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (props) => {

      selectedBook: props._asin,
  }


  return (
    <>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Search a book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={this.state.selectedBook}
                    changeSelectedBook={this.changeSelectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={this.state.selectedBook} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
