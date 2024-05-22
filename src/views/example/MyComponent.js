import React from "react";
import DisplayUser from "./DisplayUser";
import AddUser from "./AddUser";

const MyComponent = () => {
  const [stds, setStds] = React.useState([
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
  ]);

  const addStd = (std) => {
    setStds([...stds, std]);
  };

  const handleOnChangeName = (event) =>
    this.setState({ name: event.target.value });

  const handleDelete = (name) => {
    let tempStds = [...stds];
    tempStds = tempStds.filter((std, index) => std.name !== name);
    setStds(tempStds);
  };

  return (
    <>
      {/* React.Fragment */}
      {/*<div className="first">*/}
      {/*  <input*/}
      {/*    value={this.state.name}*/}
      {/*    type="text"*/}
      {/*    onChange={(event) => handleOnChangeName(event)}*/}
      {/*  />*/}
      {/*  /!*Hello my name is {this.state["name"]}*!/*/}
      {/*</div>*/}
      <AddUser addStd={addStd} />
      <DisplayUser stds={stds} handleDelete={handleDelete} />
    </>
  );
};

export default MyComponent;
