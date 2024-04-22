import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
    };
  }
  updateInput(value) {
    this.setState({ userInput: value });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),

        value: this.state.userInput,
      };

      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];

    const updateList = list.filter((item) => item.id !== key);

    this.setState({
      list: updateList,
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Planı Güncelle");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatesTodos = [...todos];
      updatesTodos[index].value = editedTodo;
      this.setState({
        list: updatesTodos,
      });
    }
  };

  render() {
    return (
      <Container
        style={{ backgroundColor: "rgb(249, 249, 249)", padding: "20px" }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
            color: "rgb(76, 175, 80)",
            marginBottom: "20px",
          }}
        >
          GÜNLÜK PLAN
        </Row>
        <hr
          style={{ backgroundColor: "rgb(76, 175, 80)", marginBottom: "20px" }}
        />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Plan Listeniz..."
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
                style={{
                  borderRadius: "10px",
                  border: "2px solid rgb(76, 175, 80)",
                  color: "rgb(76, 175, 80)",
                }}
              />
              <InputGroup>
                <Button
                  variant="success"
                  className="mt-2"
                  onClick={() => this.addItem()}
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  PLAN EKLE
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {this.state.list.map((item, index) => {
                return (
                  <div key={index}>
                    <ListGroup.Item
                      variant="dark"
                      action
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "rgb(240, 240, 240)",
                        marginBottom: "10px",
                        borderRadius: "10px",
                        boxShadow: "2px 2px 2px 5px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div>{item.value}</div>{" "}
                      <span>
                        <Button
                          style={{ marginRight: "10px" }}
                          variant="danger"
                          onClick={() => this.deleteItem(item.id)}
                          className="delete-btn"
                        >
                          Kaldır
                        </Button>
                        <Button
                          variant="warning"
                          onClick={() => this.editItem(index)}
                          className="edit-btn"
                        >
                          Düzenle
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
