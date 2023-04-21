import { View, Text } from "react-native";
import React from "react";
import AuthService from "../utils/services/AuthService";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const logout = () => {
    AuthService.destroyUser().then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Text onPress={logout}>Home</Text>
    </View>
  );
}
