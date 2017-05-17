let React = require('react'),
    Clock = require('Clock');

let Countdown = () => {
  return (
    <div>
      <Clock totalSeconds={62}/>
    </div>

  )
};

module.exports = Countdown;
