import React from "react";
import { button, Modal, Form} from "react-bootstrap";

const Popup = ({ handleAdd, show, value, updateItems,id }) => {
  return (
    <>
      <Modal show={show} onHide={handleAdd}>
        <Modal.Header>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={value}

              key={id}
            />
          </Form.Group>
        </Modal.Body>
        <div class="cursor-pointer">
          <Modal.Footer>
            <div className="cancel">
              <button onClick={handleAdd}>Cancel</button>
            </div>
            <div className="done">
              <button onClick={updateItems}>Done</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
