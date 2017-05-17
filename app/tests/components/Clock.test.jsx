let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),

    Clock = require('Clock');

  describe('Clock', () => {
    it('should exist', () => {
      expect(Clock).toExist();
    });

    describe('formatSeconds', () => {

      it('Should return formatted seconds', () => {
        let clock = TestUtils.renderIntoDocument(<Clock/>),
            seconds = 615,
            expected = '10:15',
            actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
      });

      it('Should return formatted seconds if less then 10', () => {

        let clock = TestUtils.renderIntoDocument(<Clock/>),
            seconds = 65,
            expected = '01:05',
            actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);

      });

    });
  })
