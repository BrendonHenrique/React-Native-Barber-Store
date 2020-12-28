import { render, fireEvent } from "@testing-library/react-native";
import * as React from "react";

import Button from "..";

describe("Standart Button component test cases", () => {
  test("<Button/> snapshot", () => {
    const tree = render(<Button />);
    expect(tree).toMatchSnapshot();
  });

  test("Should Display children inside button text", () => {
    const props = {
      children: "button text",
    };

    const { getByText } = render(<Button {...props} />);
    getByText(props.children);
  });

  test("Should execute onPress function as expected", () => {
    const props = {
      children: "Press me",
      onPress: jest.fn(),
    };

    const { getByText } = render(<Button {...props} />);
    fireEvent.press(getByText("Press me"));
    expect(props.onPress).toHaveBeenCalled();
  });
});
