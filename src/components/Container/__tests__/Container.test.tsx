import { render } from "@testing-library/react-native";
import theme from "configs/theme";
import * as React from "react";
import { ThemeProvider } from "styled-components";

import Container from "../styles";
test("<Container/> snapshot", () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
