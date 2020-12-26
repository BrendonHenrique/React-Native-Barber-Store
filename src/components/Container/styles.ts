import { withTheme } from "styled-components";
import styled from "styled-components/native";
import ContainerType from "types/ContainerType";
import {
  horizontalPadding,
  verticalPadding,
  fullSpace,
  justifyCenter,
  alignCenter,
  verticalMargin,
  horizontalMargin,
  marginTop,
  marginBottom,
} from "utils/styles/Layout";

const IsThemeDark = ({ isDark, theme }) =>
  isDark &&
  `
    background-color: ${theme.dark}
  `;

const Container = styled.View<ContainerType>`
  ${(props) => props.fullSpace && fullSpace()}
  ${(props) => IsThemeDark(props)}
  ${(props) => props.alignCenter && alignCenter()}
  ${(props) => props.justifyCenter && justifyCenter()}
  ${(props) => props.verticalPadding && verticalPadding(props.verticalPadding)}
  ${(props) =>
    props.horizontalPadding && horizontalPadding(props.horizontalPadding)}
    ${(props) => props.verticalMargin && verticalMargin(props.verticalMargin)}
    ${(props) =>
    props.horizontalMargin && horizontalMargin(props.horizontalMargin)}
  ${(props) => props.marginTop && marginTop(props.marginTop)};
  ${(props) => props.marginBottom && marginBottom(props.marginBottom)};
`;

export default withTheme(Container);
