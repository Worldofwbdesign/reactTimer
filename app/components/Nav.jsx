let React = require('react'),
    { Link, IndexLink } = require('react-router');

let Nav = React.createClass({

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{ color: 'red' }}>Timer</IndexLink></li>
            <li><Link to="/countdown" activeClassName="active" activeStyle={{ color: 'red' }}>Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <span>Created by <a href="https://github.com/Worldofwbdesign" target="_blank">Roman Martynenko</a></span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
