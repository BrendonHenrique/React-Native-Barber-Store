import { withTheme } from "styled-components";
import styled from "styled-components/native";

const IsThemeDark = ({ isDark, theme }) =>
  isDark &&
  `
    background-color: ${theme.dark}
  `;

const Container = styled.View`
  flex: 1;
  ${(props) => IsThemeDark(props)}
`;

export default withTheme(Container);
