let React = require('react'),
    Clock = require('Clock'),
    CountdownForm = require('CountdownForm');

let Countdown = React.createClass({

  getInitialState() {
    return { count: 0 };
  },

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds
    })
  },

  render() {
    let { count } = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }

});

module.exports = Countdown;
