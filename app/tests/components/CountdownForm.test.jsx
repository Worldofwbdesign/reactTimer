let expect = require('expect');
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let CountdownForm = require('CountdownForm');

describe('Countdown form', () => {
    it('should exist', () => {
      expect(CountdownForm).toExist();
    });

    it('should run if valid number was entered', () => {
      let spy = expect.createSpy();
      let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      let $el = $(ReactDOM.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = '101';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(101);
    });

    it('should not run if entered value isn\'t a number', () => {
      let spy = expect.createSpy();
      let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      let $el = $(ReactDOM.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = 'string';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
})
