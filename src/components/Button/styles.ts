import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { justifyCenter, alignCenter } from "utils/styles/Layout";

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.orange};
  border-radius: 6px;
  ${justifyCenter()}
  ${alignCenter()}
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.dark};
  font-size: 18px;
`;
