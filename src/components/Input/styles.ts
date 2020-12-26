import styled from "styled-components/native";
import { horizontalPadding, fullSpace, alignCenter } from "utils/styles/Layout";

interface ContainerProps {
  isFocused?: boolean;
  isInvalid?: boolean;
}

const handleBorder = (conditional, color) => {
  return (
    conditional &&
    ` 
    border-color: ${color};
    border-width: 1px;
  `
  );
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  ${horizontalPadding(16)};
  background: ${({ theme }) => theme.darkPurple};
  border-radius: 10px;
  margin-bottom: 16px;
  flex-direction: row;
  ${alignCenter()}
  ${(props) => handleBorder(props.isInvalid, props.theme.error)}
  ${(props) => handleBorder(props.isFocused, props.theme.orange)}
`;

export const TextInput = styled.TextInput`
  ${fullSpace()};
  color: ${({ theme }) => theme.light};
  font-size: 16px;
  margin-left: 16px;
  font-family: ${({ theme }) => theme.fontMedium};
`;
