import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()

    this.state = {
      seconds: 0
    }
  }

  componentDidMount() {
    this.setState({ seconds: this.props.startingSeconds })
    this.interval = setInterval(this.decrementTimer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  decrementTimer() {
    if (this.props.isPaused)
      return
    else {
      this.setState({ seconds: this.state.seconds - 1 })
      if (this.state.seconds < 1) {
        this.props.gameOver()
        clearInterval(this.interval)
      }
    }
  }

  setPaused() {
    this.setState({paused: true})
  }

  render() {
    return (
      <div>
        <h3>Time Left: <span style={{color: "#a50707"}}>{this.state.seconds}</span></h3>
      </div>
    )
  }
}

Timer.propTypes = {
  startingSeconds: React.PropTypes.number.isRequired,
  gameOver: React.PropTypes.func.isRequired,
  isPaused: React.PropTypes.bool.isRequired
}

export default Timer
