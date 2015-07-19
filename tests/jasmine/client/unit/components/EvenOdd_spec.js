/*global EvenOdd, renderComponent */

// note, see ../spec_helper.js for renderWithProps

describe("EvenOdd Component", function() {
  var defProps, renderWithProps, component, el, $el;

  beforeEach(function() {
    renderWithProps = function(props) {
      component = renderComponent(EvenOdd, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });

  it("should determine if number is odd or even", function() {
    renderWithProps({});
    expect(component.isEven(0)).toBe(true);
    expect(component.isEven(4)).toBe(true);
    expect(component.isEven(5)).toBe(false);
  });

  it("should print out odd", function() {
    renderWithProps({countNumber: 5});
    expect($el.text()).toBe("5 is Odd");
  });

  it("should print out even", function() {
    renderWithProps({countNumber: 4});
    expect($el.text()).toBe("4 is Even");
  });
});
