import React from "react";

function TableHeaer() {
  return (
    <>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Option</th>
      </tr>
    </>
  );
}

let TableBody = (props) => {
  const rows = props.charactersData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={(event) => props.removeCharacter(event)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends React.Component {
  state = {
    charactersData: this.props.charactersData,
  };

  removeCharacter = (event) => {
    console.log(event.target.name);
    this.state.charactersData.filter(
      (character) => event.target.name !== character.name,
    );
  };
  render() {
    return (
      <table className="table">
        <TableHeaer />
        {/*{this.charactersData.map((character, index) => (*/}
        {/*  <tr key={index}>*/}
        {/*    <td>{character.name}</td>*/}
        {/*    <td>{character.job}</td>*/}
        {/*  </tr>*/}
        {/*))}*/}
        <TableBody
          charactersData={this.state.charactersData}
          removeCharacter={this.removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
