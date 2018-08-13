import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Link from "./Link";

test("basic snapshot", () => {
  const component = renderer.create(
    <Link href="http://google.com" onClick={(event) => alert("clicked")}>
      <img src="/reaction-design-system-logo.svg" width="200" height="200" />
    </Link>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
