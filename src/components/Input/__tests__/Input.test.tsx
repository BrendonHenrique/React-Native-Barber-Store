import { render } from "@testing-library/react-native";
import * as React from "react";

import Input from "..";

test("<Input/> snapshot", () => {
  const tree = render(<Input />);
  expect(tree).toMatchSnapshot();
});
