import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "pages/SignIn";
import SignUp from "pages/SingUp";
import * as React from "react";

const Auth = createStackNavigator();

type AuthRoutesProps = {
  authenticated?: boolean;
};

const AuthRoutes: React.FC<AuthRoutesProps> = ({ authenticated }) => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
export default AuthRoutes;
