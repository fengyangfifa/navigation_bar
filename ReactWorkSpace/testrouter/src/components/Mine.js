import React, { Component } from 'react';

class Mine extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        mine
        {/* {this.props.match.params} */}
      </div>
    );
  }
}

export default Mine;