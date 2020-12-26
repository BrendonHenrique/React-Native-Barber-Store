import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import theme from "configs/theme";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { StatusBar } from "react-native";
import Routes from "routes";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({
    "RobotoSlab-Medium": require("./assets/fonts/RobotoSlab-Medium.ttf"),
    "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor={theme.dark} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
