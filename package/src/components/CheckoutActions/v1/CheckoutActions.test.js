import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CheckoutActions from "./CheckoutActions";

class mockCheckoutAction extends React.Component {
  static renderComplete = () => <span />;
  render() {
    return <span />;
  }
}

const mockActions = [
  {
    activeLabel: "mock active action one",
    completeLabel: "mock complete action one",
    component: mockCheckoutAction,
    id: "123",
    incompleteLabel: "mock inactive action one",
    onSubmit: () => true,
    status: "incomplete",
    props: {
      cartData: {
        data: null
      },
      cartMutation() {}
    }
  }
];

test("basic snapshot", () => {
  const component = renderer.create(<CheckoutActions components={mockComponents} actions={mockActions} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
