import React, { Component } from "react";
import MyComponent from "./MyComponent";

const AddUser = (props) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const handleChangeAge = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("State: ", name, age);
    props.addStd({
      name: name,
      age: age,
    });
  };

  console.log(name, age);
  return (
    <form>
      <label htmlFor="name">name:</label>
      <br />
      <input
        autoFocus={true}
        type="text"
        value={name}
        onChange={(event) => handleChangeName(event)}
      />
      <br />
      <label htmlFor="age">age:</label>
      <br />
      <input
        type="text"
        value={age}
        onChange={(event) => handleChangeAge(event)}
      />
      <br />
      <br />
      <input
        type="submit"
        value="Submit"
        onClick={(event) => handleSubmit(event)}
      />
    </form>
  );
};

export default AddUser;
