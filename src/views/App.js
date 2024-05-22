import "./App.scss";
import MyComponent from "./example/MyComponent";
import React, { Component } from "react";
import AddUser from "./example/AddUser";
import Table from "./example/Table";

const custom = React.createElement(
  "h1",
  { className: "site-heading" },
  "Hello, React!",
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <MyComponent />
          {/*<Table*/}
          {/*  charactersData={[*/}
          {/*    {*/}
          {/*      name: "Charlie",*/}
          {/*      job: "Janitor",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Mac",*/}
          {/*      job: "Bouncer",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Dee",*/}
          {/*      job: "Aspring actress",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Dennis",*/}
          {/*      job: "Bartender",*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
          {/*{custom}*/}
        </header>
      </div>

      // + {custom}
    );
  }
}

// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]
//
//     return (
//       <div className="container">
//         <Table characterData1={characters} />
//       </div>
//     )
//   }
// }

export default App;
