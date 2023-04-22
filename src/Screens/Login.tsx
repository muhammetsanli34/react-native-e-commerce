import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import LoginSchema from "../utils/validations/LoginValidation";
import AuthService from "../utils/services/AuthService";
import Loader from '../common/Loader';

const Login = () => {
  const navigation = useNavigation();

  interface Login {
    email: string;
    password: string;
  }

  const initalState = {
    email: "",
    password: "",
  };

  const [modalVisible, setModalVisible] = useState(false);

  const validateUser = async (values: Login) => {
    const userData = await AuthService.getUser();
    if (
      userData.email !== values.email ||
      userData.password !== values.password
    ) {
      return false;
    }
    return true;
  };

  const submit = (values: Login) => {
    setModalVisible(true)
    validateUser(values).then((success) => {
      if (!success) {
        setModalVisible(false)
        ToastAndroid.show("Hatalı giriş bilgileri", ToastAndroid.SHORT);
      } else {
        setModalVisible(false)
        navigation.navigate("Home");
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/opening-logo.png")}
        style={{
          width: 60,
          height: 60,
          alignSelf: "center",
          marginTop: 100,
        }}
      />
      <Text
        style={{
          marginTop: 50,
          alignSelf: "center",
          fontSize: 24,
          fontWeight: "600",
          color: "black",
        }}
      >
        Login
      </Text>
      <Formik
        initialValues={initalState as Login}
        validationSchema={LoginSchema}
        onSubmit={(values) => submit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <CustomTextInput
              placeholder={"Enter Email"}
              icon={require("../../assets/mail.png")}
              onChangeText={handleChange("email")}
              onBlur={() => handleBlur("email")}
              value={values.email}
            />
            {errors.email ? (
              <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
                {errors.email}
              </Text>
            ) : (
              ""
            )}
            <CustomTextInput
              placeholder={"Enter Password"}
              type={"password"}
              icon={require("../../assets/padlock.png")}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={() => handleBlur("password")}
            />
            {errors.password ? (
              <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
                {errors.password}
              </Text>
            ) : (
              ""
            )}
            <CommonButton
              onPress={handleSubmit}
              title={"Login"}
              bgColor={"#000"}
              textColor={"#fff"}
            />
          </View>
        )}
      </Formik>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          alignSelf: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Create New Account?
      </Text>
      <Loader visible={modalVisible} />
    </View>
  );
};

export default Login;
