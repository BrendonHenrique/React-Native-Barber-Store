import { render } from "@testing-library/react-native";
import * as React from "react";

import Button from "..";

test("<Button/> snapshot", () => {
  const tree = render(<Button />);
  expect(tree).toMatchSnapshot();
});
