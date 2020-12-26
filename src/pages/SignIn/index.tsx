import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import logoImg from "assets/logo.png";
import Button from "components/Button";
import { BottomButton, BottomButtonText } from "components/Button/BottomButton";
import { TextButton, TextButtonLabel } from "components/Button/TextButton";
import Container from "components/Container/styles";
import Input from "components/Input";
import { Title } from "components/Title/styles";
import theme from "configs/theme";
import { Formik } from "formik";
import * as React from "react";
import { useRef } from "react";
import { Image, ScrollView } from "react-native";
import { loginAccount } from "services/login";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container
          fullSpace
          isDark
          alignCenter
          justifyCenter
          horizontalPadding={30}
        >
          <Image source={logoImg} />
          <Title>Faça seu login</Title>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={loginAccount}
            validationSchema={SignInSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <Input
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef?.current?.focus()}
                  isInvalid={!!errors.email && touched.email}
                />
                <Input
                  ref={passwordInputRef}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  name="password"
                  icon="lock"
                  placeholder="Password"
                  secureTextEntry
                  returnKeyType="send"
                  onSubmitEditing={() => handleSubmit()}
                  isInvalid={!!errors.password && touched.password}
                />
                <Button onPress={() => handleSubmit()}>Entrar</Button>
              </>
            )}
          </Formik>
          <TextButton onPress={() => alert("Esqueceu a senha é gatinha ?")}>
            <TextButtonLabel>Esqueci minha senha</TextButtonLabel>
          </TextButton>
        </Container>
      </ScrollView>
      <BottomButton onPress={() => navigation.navigate("SignUp")}>
        <Feather name="log-in" size={20} color={theme.orange} />
        <BottomButtonText>Criar uma conta</BottomButtonText>
      </BottomButton>
    </>
  );
};

export default SignIn;
