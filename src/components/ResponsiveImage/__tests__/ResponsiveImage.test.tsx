import { render } from "@testing-library/react-native";
import * as React from "react";

import ResponsiveImage from "..";

test("<ResponsiveImage/> snapshot", () => {
  const tree = render(<ResponsiveImage />);
  expect(tree).toMatchSnapshot();
});
