/* jshint maxlen: false */

Counter = React.createClass({
  mixins: [ReactMeteorData],

  getDefaultProps() {
    return { foo: true };
  },

  getInitialState() {
    return { isHidden: false };
  },

  getMeteorData() {
    return {
      count: CounterDomain.getCount()
    };
  },

  toggleHidden() {
    var toggled = !this.state.isHidden;
    this.setState({isHidden: toggled});
  },

  handleInc() {
    CounterActions.incrementCount();
  },

  handleDec() {
    CounterActions.decrementCount();
  },

  render() {
    return (
      <div className='Counter'>
        <h1>Meteor Counter</h1>

        <p>Checkout the tests in the tests directory!</p>

        <button id='inc' onClick={this.handleInc}>Increment</button>
        <button id='dec' onClick={this.handleDec}>Decrement</button>

        <p>The count is: <b>{ this.data.count }</b></p>
      </div>
    );
  }
});
