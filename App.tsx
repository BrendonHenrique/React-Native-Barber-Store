import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import theme from "configs/theme";
import { useFonts } from "expo-font";
import React from "react";
import { StatusBar, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import Routes from "routes";
import { ThemeProvider } from "styled-components";

import ReponsiveImage from "./src/components/ResponsiveImage";
console.disableYellowBox = true;

export default function App() {
  const [fontsLoaded] = useFonts({
    "RobotoSlab-Medium": require("./assets/fonts/RobotoSlab-Medium.ttf"),
    "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
  });

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.dark} />
      <NavigationContainer>
        <RootSiblingParent>
          <Routes />
        </RootSiblingParent>
      </NavigationContainer>
    </ThemeProvider>
  ) : (
    <View>
      <ReponsiveImage source={require("./assets/images/splash.gif")} />
    </View>
  );
}
