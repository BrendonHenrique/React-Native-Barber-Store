import * as React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import ContainerType from "types/ContainerType";

import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties, ContainerType {
  children?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
