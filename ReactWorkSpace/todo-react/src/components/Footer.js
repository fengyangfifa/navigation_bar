import React, { Component } from "react";

class Footer extends Component {
  handleClick(e) {
    const text = e.target.innerHTML.toLowerCase();
    this.props.setFilter(text);
  }

  render() {
    const { filter } = this.props;
    return (
      <div
        onClick={(e) => { 
          this.handleClick(e);
        }}
      >
        <span>Show:</span>
        <button disabled={filter === "all"}>All</button>
        <button disabled={filter === "active"}>Active</button>
        <button disabled={filter === "completed"}>Completed</button>
      </div>
    );
  }
}

export default Footer;
