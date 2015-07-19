/*global CounterActions:true */

CounterActions = {
  incrementCount() {
    CounterDomain.handleIncrementCount(1);
    console.log('[Actions] incrementCount');
  },

  decrementCount() {
    CounterDomain.handleDecrementCount(1);
    console.log('[Actions] decrementCount');
  },
};
