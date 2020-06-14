import React from 'react'


class NameCard extends React.Component {
  render() {
    const {name, number, isHuman, tags} = this.props;
    return (
      <div className="alert alert-success">
        <h4>{name}</h4>
        <ul>
          <li>电话：{number}</li>
        </ul>
        <p>
          { ['fifa', 'fy'].map((tag, index) => (
            <span key={index}>{tag}</span>
          )) }
        </p>
      </div>
    )
  }
}

export default NameCard;
