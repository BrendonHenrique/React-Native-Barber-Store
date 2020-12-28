import { render } from "@testing-library/react-native";
import * as React from "react";

import { TextButton } from "..";

test("<TextButton/> snapshot", () => {
  const tree = render(<TextButton />);
  expect(tree).toMatchSnapshot();
});
