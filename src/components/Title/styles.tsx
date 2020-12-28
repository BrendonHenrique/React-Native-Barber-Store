import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.light || "black"};
  font-family: ${({ theme }) => theme.fontMedium || "Sans-Serif"};
  margin: 64px 0 24px;
`;
