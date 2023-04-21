import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../utils/services/AuthService";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      route();
    }, 3000);
  }, []);

  const route = async () => {
    const user = await AuthService.getUser();
    if (user.email) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/opening-logo.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          resizeMode: "center",
        }}
      />
    </View>
  );
};

export default Splash;
