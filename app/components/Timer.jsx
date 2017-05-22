let React = require('react'),
    Clock = require('Clock'),
    Countdown = require('Countdown'),
    Controls = require('Controls');

let Timer = React.createClass({

  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timerStatus !== this.state.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer);
          break;
      }
    }
  },

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },

  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus,
    })
  },

  render() {
    let { count, timerStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer app</h1>
        <Clock totalSeconds={count}/>
        <Controls onStatusChange={this.handleStatusChange} countdownStatus={timerStatus}/>
      </div>

    )
  }

});

module.exports = Timer;
