import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const PlaceForm = () => {
  const Dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    if (event.keyCode === 13) {
      Dispatch({ type: "PLACE", payload: event.target.value });
    }
  }

  return (
    <div className="placeForm mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-start fw-bold ">
            <Form.Label className="t fs-6">Where are you?</Form.Label>
            <Form.Control
              placeholder="Enter your location"
              onKeyDown={handleChange}
            />
          </Form.Group>
        </Form>
    </div>
  );
};
export default PlaceForm;
