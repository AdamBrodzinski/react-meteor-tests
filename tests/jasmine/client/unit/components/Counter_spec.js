/*global Counter, renderComponent */

// note, see ../spec_helper.js for renderWithProps

describe("Counter Component", function() {
  var defProps, renderWithProps, component, el, $el;

  beforeEach(function() {
    defProps = {
      label: 'Check me',
    };

    renderWithProps = function(props) {
      component = renderComponent(Counter, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });

  it("should be mounted in DOM", function() {
    renderWithProps(defProps);
    expect($el.length).toEqual(1);
  });

  it("should have default foo prop", function() {
    renderWithProps({});
    expect(component.props.foo).toBe(true);
  });

  it("should have default hidden state", function() {
    renderWithProps({});
    expect(component.state.isHidden).toBe(false);
  });

  it("should toggle hidden state", function() {
    renderWithProps({});
    component.toggleHidden();
    expect(component.state.isHidden).toBe(true);
  });

  it("should show count markup", function() {
    spyOn(CounterDomain, 'getCount').and.returnValue(5);
    renderWithProps({}); // re-render after stubbing
    expect($el.find('p').text()).toBe('The count is: 5');
  });

  it("inc button should call action when clicked", function() {
    spyOn(CounterActions, 'incrementCount');
    renderWithProps({});
    simulateClickOn($el.find('#inc'));
    expect(CounterActions.incrementCount).toHaveBeenCalled();
  });

  it("inc button should call action when clicked", function() {
    spyOn(CounterActions, 'decrementCount');
    renderWithProps({});
    simulateClickOn($el.find('#dec'));
    expect(CounterActions.decrementCount).toHaveBeenCalled();
  });

  it("should add two numbers", function() {
    renderWithProps({});
    var result = component.sumTwoNumbers(2, 3);
    expect(result).toBe(5);
  });

  it("should have proper heading", function() {
    expect($el.text()).toContain('Meteor Counter');
  });
});
