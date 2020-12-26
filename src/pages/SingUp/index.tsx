import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import logoImg from "assets/logo.png";
import Button from "components/Button";
import { BottomButton, BottomButtonText } from "components/Button/BottomButton";
import Container from "components/Container/styles";
import Input from "components/Input";
import { Title } from "components/Title/styles";
import theme from "configs/theme";
import { Formik } from "formik";
import * as React from "react";
import { useRef } from "react";
import { Image, ScrollView } from "react-native";
import { registerAccount } from "services/register";
import AccountType from "types/AccountType";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  nome: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignUp: React.FC = () => {
  const navigator = useNavigation();
  const passwordInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const initialAccountState: AccountType = {
    nome: "",
    email: "",
    password: "",
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container
        fullSpace
        isDark
        alignCenter
        justifyCenter
        horizontalPadding={30}
      >
        <Image source={logoImg} />
        <Title>Crie sua conta</Title>
        <Formik
          initialValues={initialAccountState}
          onSubmit={registerAccount}
          validationSchema={SignUpSchema}
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
                onChangeText={handleChange("nome")}
                onBlur={handleBlur("nome")}
                value={values.nome}
                name="nome"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef?.current?.focus()}
                isInvalid={!!errors.nome && touched.nome}
              />
              <Input
                ref={emailInputRef}
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
                textContentType="newPassword"
                onSubmitEditing={() => handleSubmit()}
                isInvalid={!!errors.password && touched.password}
              />
              <Button onPress={() => handleSubmit()}>Cadastrar</Button>
            </>
          )}
        </Formik>
      </Container>

      <BottomButton onPress={() => navigator.goBack()}>
        <Feather name="arrow-left" size={20} color={theme.light} />
        <BottomButtonText fontColor={theme.light}>
          Voltar para o login
        </BottomButtonText>
      </BottomButton>
    </ScrollView>
  );
};

export default SignUp;
