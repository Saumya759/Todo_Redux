import React from "react";
import "./App.css";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import { Provider } from "react-redux";
import store from "./redux/store";
import Modal from "./components/Modal";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="main_div">
          <div className="center_div">
            <Container fluid>
              <Row>
                <Col className="head">
                  <h5 className="heading">Today</h5>
                </Col>
                <Col>
                  <AddTodo />
                </Col>
              </Row>
            </Container>
            <Modal />
            <TodoList />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default App;
