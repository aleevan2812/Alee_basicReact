import React from "react";

class DisplayUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowed: true,
    };
  }

  handleShow() {
    this.setState({
      isShowed: !this.state.isShowed,
    });
  }

  render() {
    let { stds } = this.props;
    return (
      <>
        {this.state.isShowed ? (
          <div>
            <button onClick={() => this.handleShow()}>Show</button>
          </div>
        ) : (
          <>
            <div className="stdList">
              {stds.map((std) => {
                return (
                  <div key={std.name}>
                    {std.name} - {std.age}
                    <button onClick={() => this.props.handleDelete(std.name)}>
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShow()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default DisplayUser;
