import React, { Component } from 'react'

class Team extends Component {
  render() {
    return (
      <div>
        <h2>Player {this.props.playerIndex + 1}</h2>
        <h3>{this.props.score}</h3>
        <button className="btn btn-default" onClick={this.props.incrementPoints}>Add points!</button>
      </div>
    )
  }
}

Team.propTypes = {
  playerIndex: React.PropTypes.number.isRequired,
  score: React.PropTypes.number.isRequired,
  incrementPoints: React.PropTypes.func.isRequired
}

export default Team
