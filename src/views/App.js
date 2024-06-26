import "./App.scss";
import MyComponent from "./example/MyComponent";
import React, { Component } from "react";
import AddUser from "./example/AddUser";
import Table from "./example/Table";
import _useRef from "../components/useRef/_useRef";
import { UseContext } from "../components/useContext/UseContext";
import { UseMemo } from "../components/useMemo/UseMemo";
import { UseCallback } from "../components/useCallback/UseCallback";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}

          {/*<MyComponent />*/}
          {/*<_useRef />*/}
          {/*<UseContext />*/}
          {/*<UseMemo />*/}
          <UseCallback />
        </header>
      </div>
    );
  }
}

export default App;
