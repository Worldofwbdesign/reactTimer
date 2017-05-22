let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),

    Timer = require('Timer');

  describe('Timer', () => {
    it('should exist', () => {
      expect(Timer).toExist();
    });

    it('should be started on started state', () => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10});
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(11);
        expect(timer.state.timerStatus).toBe('started');
      }, 1001)
    });

    it('should be paused on paused state', () => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.timerStatus).toBe('paused');
      }, 1001)
    });

    it('should be paused on stopped state', () => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
      }, 1001)
    });
  })
