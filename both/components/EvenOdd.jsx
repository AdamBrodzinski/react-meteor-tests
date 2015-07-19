/* jshint maxlen: false */

EvenOdd = React.createClass({
  // notice no Meteor mixin is required since we don't have reactive data
  propTypes: {
    countNumber: React.PropTypes.number.isRequired
  },

  isEven(num) {
     return num % 2 === 0;
  },

  render() {
    var count = this.props.countNumber;
    var suffix = (this.isEven(count)) ? 'is Even' : 'is Odd';
    return (
      <div className='EvenOdd'>
        {this.props.countNumber} {suffix}
      </div>
    );
  }
});

