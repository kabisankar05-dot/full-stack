import React, { Component } from "react";

class Props extends Component {
  render() {
    return (
      <div>
        <h3>Child Component</h3>

        {/* props use */}
        <h1>Hello {this.props.name}</h1>

        {/* callback props */}
        <button onClick={this.props.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default Props;
