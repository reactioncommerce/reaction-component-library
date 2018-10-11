import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import InPageMenu from "./InPageMenu";

test("basic snapshot", () => {
  const menuItems = [
    {
      href: "/label/a",
      label: "Label A"
    },
    {
      href: "/label/b",
      label: "Label B"
    },
    {
      href: "/label/c",
      label: "Label C (Selected / Active)",
      isSelected: true
    },
    {
      href: "/label/d",
      label: "Label D"
    },
    {
      href: "/label/e",
      label: "Label E"
    }
  ];

  const component = renderer.create(<InPageMenu menuItems={menuItems} components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
