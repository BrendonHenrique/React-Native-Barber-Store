import { Feather } from "@expo/vector-icons";
import theme from "configs/theme";
import * as React from "react";
import { TextInputProps } from "react-native";

import { Container, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  ref?: React.ElementRef<typeof TextInput>;
  isInvalid?: boolean;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, value, isInvalid, ...props },
  ref
) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFilled, setIsFilled] = React.useState(false);
  const [showInvalidBorder, setShowInvalidBorder] = React.useState(false);

  const handleInputFocus = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  React.useEffect(() => {
    setIsFilled(!!value);
  }, [value]);

  React.useEffect(() => setShowInvalidBorder(isInvalid!), [isInvalid]);

  const handleIconColor = () =>
    isFilled || isFocused ? theme.orange : theme.grey;

  return (
    <Container isFocused={isFocused} isInvalid={showInvalidBorder}>
      <Feather name={icon} size={20} color={handleIconColor()} />
      <TextInput
        onFocus={handleInputFocus}
        onEndEditing={handleInputBlur}
        ref={ref}
        placeholderTextColor={theme.grey}
        {...props}
      />
    </Container>
  );
};

export default React.forwardRef(Input);
