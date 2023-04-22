import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AuthService from "../utils/services/AuthService";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getProducts } from '../store/product';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => dispatch(getProducts()), [])

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
