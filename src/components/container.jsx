import Team from './team'
import Scoreboard from './scoreboard'
import { div } from "react-dom"
import React, { Component } from 'react'
import { generateEmptyArray } from '../utils'

const NUM_PLAYERS = 2;

class Container extends Component {
  constructor() {
    super()

    this.state = {
      gameNumber: 0,
      playerScores: generateEmptyArray(NUM_PLAYERS, 0)
    }
  }

  incrementPoint(player) {
    let scores = this.state.playerScores
    scores[player] += 1
    this.setState({ playerScores: scores })
  }

  resetGame() {
    this.setState({
      gameNumber: this.state.gameNumber + 1,
      playerScores: generateEmptyArray(NUM_PLAYERS, 0)
    })
  }

  generateTeam(score, playerIndex) {
    return (
      <Team
        key={playerIndex}
        score={score}
        playerIndex={playerIndex}
        incrementPoints={this.incrementPoint.bind(this, playerIndex)}
        />
    )
  }

  render() {
    var teams = this.state.playerScores.map((score, i) => this.generateTeam(score, i))

    return (
      <div key={this.state.gameNumber}>
        <Scoreboard
          resetGame={this.resetGame.bind(this)}
          />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          {teams}
        </div>
      </div>
    )
  }
}

export default Container
