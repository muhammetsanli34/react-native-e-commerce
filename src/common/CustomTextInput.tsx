import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const CustomTextInput = ({
  value,
  onChangeText,
  onBlur,
  placeholder,
  icon,
  type,
  key,
  keyboardType,
}) => {
  return (
    <View
      style={{
        width: "85%",
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Image source={icon} style={{ width: 30, height: 30 }} />
      <TextInput
        value={value}
        placeholder={placeholder}
        style={{ marginLeft: 10 }}
        secureTextEntry={type === "password" ? true : false}
        onChangeText={(txt) => {
          onChangeText(txt);
        }}
        onBlur={(txt) => {
          onBlur(txt);
        }}
        keyboardType={keyboardType ? keyboardType : "default"}
      />
    </View>
  );
};

export default CustomTextInput;
