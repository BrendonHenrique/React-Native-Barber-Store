import { render } from "@testing-library/react-native";
import * as React from "react";

import { Title } from "../styles";

test("<Title/> snapshot", () => {
  const tree = render(<Title />);
  expect(tree).toMatchSnapshot();
});
