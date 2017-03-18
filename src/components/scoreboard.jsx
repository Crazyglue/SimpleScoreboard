import React, { Component } from 'react'
import Timer from './timer'

class Scoreboard extends Component {
  constructor() {
    super()

    this.state = {
      paused: true,
      defaultGameTime: 300,
      gameNumber: 0
    }
  }

  gameOver() {
    this.setState({ paused: true })
  }

  startGame() {
    this.setState({ paused: false })
  }

  setPaused() {
    this.setState({ paused: true })
  }

  resetGame() {
    this.props.resetGame()
    this.setState({ pause: true })
  }

  render() {
    let controlButton = null

    if (this.state.paused)
      controlButton = <button className="btn btn-warning" onClick={this.startGame.bind(this)}>Start</button>
    else
      controlButton = <button className="btn btn-info" onClick={this.setPaused.bind(this)}>Pause</button>

    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Timer
          startingSeconds={this.state.defaultGameTime}
          isPaused={this.state.paused}
          gameOver={this.gameOver.bind(this)}
          />
        <div style={{flexDirection: "row"}}>
          {controlButton}
          <button className="btn btn-danger" onClick={this.resetGame.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

Scoreboard.propTypes = {
  resetGame: React.PropTypes.func.isRequired
}

export default Scoreboard
