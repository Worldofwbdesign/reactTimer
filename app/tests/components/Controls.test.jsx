let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),

    Controls = require('Controls');

describe('Controls', () => {

  it('should exist', () => {
    expect(Controls).toExist();
  });

  it('should render pause button when started', () => {
    let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
    let $el = $(ReactDOM.findDOMNode(controls));
    let $pauseButton = $el.find('button:contains(Pause)');

    expect($pauseButton.length).toBe(1);
  });

  it('should render start button when paused', () => {
    let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
    let $el = $(ReactDOM.findDOMNode(controls));
    let $pauseButton = $el.find('button:contains(Start)');

    expect($pauseButton.length).toBe(1);
  });

})
