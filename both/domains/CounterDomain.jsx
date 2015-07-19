var state = new ReactiveDict('CounterDomain');
state.set('count', 0);

CounterDomain = {
  getCount() {
    return state.get('count');
  },

  handleIncrementCount(amount) {
    state.set('count', this.getCount() + amount);
  },

  handleDecrementCount(amount) {
    state.set('count', this.getCount() - amount);
  },
};
