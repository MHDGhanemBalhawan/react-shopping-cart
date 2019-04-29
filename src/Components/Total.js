import React from "react";
export default class Total extends React.Component {
  render() {
    return (
      <div>
        <h3>Total Cash: ${this.props.total} </h3>
      </div>
    );
  }
}
