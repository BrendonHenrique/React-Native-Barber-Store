import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import theme from "configs/theme";
import React from "react";
import { StatusBar } from "react-native";
import Routes from "routes";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.dark} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
