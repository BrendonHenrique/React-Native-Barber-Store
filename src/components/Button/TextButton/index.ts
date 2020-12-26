import styled from "styled-components/native";
import { verticalPadding } from "utils/styles/Layout";

export const TextButton = styled.TouchableOpacity`
  ${verticalPadding(24)}
`;

export const TextButtonLabel = styled.Text`
  color: ${({ theme }) => theme.light};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontRegular};
`;
