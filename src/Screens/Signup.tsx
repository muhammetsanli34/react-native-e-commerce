import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import RegisterSchema from "../utils/validations/RegisterValidation";
import AuthService from "../utils/services/AuthService";

const Signup = () => {
  interface Signup {
    email: string;
    password: string;
    name: string;
    phone: string;
  }

  const initialState = {
    email: "",
    password: "",
    name: "",
    phone: "",
  };

  const navigation = useNavigation();

  const submit = (values: Signup) => {
    AuthService.setUser(values).then(() => navigation.goBack());
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/opening-logo.png")}
        style={{ width: 60, height: 60, alignSelf: "center", marginTop: 100 }}
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
        Create New Account
      </Text>
      <Formik
        initialValues={initialState as Signup}
        validationSchema={RegisterSchema}
        onSubmit={(values) => submit(values)}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <CustomTextInput
              placeholder={"Enter Name"}
              icon={require("../../assets/user.png")}
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={() => handleBlur("name")}
            />
            <CustomTextInput
              placeholder={"Enter Mobile"}
              icon={require("../../assets/smartphone.png")}
              value={values.phone}
              onChangeText={handleChange("phone")}
              keyboardType={"number-pad"}
              onBlur={() => handleBlur("phone")}
            />
            <CustomTextInput
              placeholder={"Enter Email"}
              icon={require("../../assets/mail.png")}
              onChangeText={handleChange("email")}
              onBlur={() => handleBlur("email")}
              keyboardType={"email-address"}
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
              onPress={() => {
                handleSubmit();
              }}
              title={"Signup"}
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
          marginBottom: 50,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Already have account?
      </Text>
    </View>
  );
};

export default Signup;
