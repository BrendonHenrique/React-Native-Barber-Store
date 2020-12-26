import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontMedium};
  margin: 64px 0 24px;
`;
