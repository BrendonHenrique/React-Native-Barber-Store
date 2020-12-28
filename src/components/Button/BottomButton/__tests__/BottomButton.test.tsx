import { render, fireEvent } from "@testing-library/react-native";
import * as React from "react";

import { BottomButton, BottomButtonText } from "..";

describe("Bottom button test cases", () => {
  test("<BottomButton/> snapshot", () => {
    const tree = render(<BottomButton />);
    expect(tree).toMatchSnapshot();
  });

  test("Should render buttom text", () => {
    const { getByText } = render(
      <BottomButton>
        <BottomButtonText>Text</BottomButtonText>
      </BottomButton>
    );

    getByText("Text");
  });

  test("Should call onPress function", () => {
    const props = {
      onPress: jest.fn(),
    };

    const { getByText } = render(
      <BottomButton {...props}>
        <BottomButtonText>Text</BottomButtonText>
      </BottomButton>
    );

    fireEvent.press(getByText("Text"));
    expect(props.onPress).toHaveBeenCalled();
  });

  test("Should set color depending on props", () => {
    const props = {
      fontColor: "#fff",
      children: "Text",
      testID: "test-id",
    };

    const componentRenderd = render(
      <BottomButtonText {...props}>{props.children}</BottomButtonText>
    );
    const buttomBottomText = componentRenderd.getByTestId(props.testID);

    expect(buttomBottomText.props.style[0]).toMatchObject({
      color: props.fontColor,
    });
  });

  test("Should be at bottom", () => {
    const props = {
      children: "Text",
      testID: "test-id",
    };

    const componentRenderd = render(<BottomButton {...props} />);

    const bottomButton = componentRenderd.getByTestId(props.testID);

    expect(bottomButton.props.style).toMatchObject({
      position: "absolute",
      bottom: 0,
    });
  });
});
