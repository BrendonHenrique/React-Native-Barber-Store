import styled from "styled-components/native";
import {
  verticalPadding,
  justifyCenter,
  alignCenter,
} from "utils/styles/Layout";

export const BottomButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  border-top-width: 1px;
  flex-direction: row;
  background: ${({ theme }) => theme?.dark || "transparent"};
  border-color: ${({ theme }) => theme?.darkPurple || "transparent"};
  ${verticalPadding(16)};
  ${alignCenter()};
  ${justifyCenter()};
`;

export const BottomButtonText = styled.Text`
  color: ${({ theme, fontColor }) => fontColor || theme?.orange || "black"};
  font-size: 16px;
  font-family: ${({ theme }) => theme?.fontRegular || "Sans-Serif"};
  margin-left: 20px;
`;
