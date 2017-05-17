let React = require('react'),
    Nav = require('Nav');

let Main = (props) => {
  return (
      <div>
        <Nav/>
        <h1>React app</h1>
        {props.children}
      </div>
  );
}

module.exports = Main;
