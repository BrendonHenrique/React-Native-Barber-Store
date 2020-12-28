import { render } from "@testing-library/react-native";
import * as React from "react";

import { BottomButton } from "..";

test("<BottomButton/> snapshot", () => {
  const tree = render(<BottomButton />);
  expect(tree).toMatchSnapshot();
});
