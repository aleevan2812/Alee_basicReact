import React from "react";
import DisplayUser from "./DisplayUser";
import AddUser from "./AddUser";
class MyComponent extends React.Component {
  state = {
    stds: [
      {
        name: "Name 1",
        age: 12,
      },
      {
        name: "Name 2",
        age: 22,
      },
      {
        name: "Name 3",
        age: 33,
      },
    ],
  };

  handleOnChangeName = (event) => this.setState({ name: event.target.value });

  addStd = (std) => {
    console.log(std);
    this.setState({
      stds: [...this.state.stds, std],
    });
  };

  handleDelete = (name) => {
    let tempStds = [...this.state.stds];
    tempStds = tempStds.filter((std, index) => std.name !== name);
    this.setState({
      stds: [...tempStds],
    });
  };
  render() {
    return (
      <>
        {/* React.Fragment */}
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          Hello my name is {this.state["name"]}
        </div>
        <AddUser addStd={this.addStd} />
        <DisplayUser stds={this.state.stds} handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default MyComponent;
