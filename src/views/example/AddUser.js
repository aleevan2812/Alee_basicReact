import React, { Component } from "react";
import MyComponent from "./MyComponent";

class AddUser extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChangeName = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeAge = (event) => {
    console.log(event.target.value);
    this.setState({
      age: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("State: ", this.state);
    this.props.addStd({
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <label htmlFor="name">name:</label>
        <br />
        <input
          autoFocus={true}
          type="text"
          value={this.state.name}
          onChange={(event) => this.handleChangeName(event)}
        />
        <br />
        <label htmlFor="age">age:</label>
        <br />
        <input
          type="text"
          value={this.state.age}
          onChange={(event) => this.handleChangeAge(event)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    );
  }
}

export default AddUser;
