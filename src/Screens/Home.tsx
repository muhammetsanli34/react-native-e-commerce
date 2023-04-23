import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AuthService from "../utils/services/AuthService";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/product";
import { TouchableOpacity } from "react-native-gesture-handler";
import Main from "../tabs/Main";
import MenuItem from "../common/MenuItem";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(getProducts()), []);

  const logout = () => {
    AuthService.destroyUser().then(() => {
      navigation.navigate("Login");
    });
  };

  type tabValues = "0";

  const [activeTab, setActiveTab] = useState<tabValues>("0");

  const components = {
    "0": Main,
  };

  const ActiveTab = components[activeTab];

  return (
    <View style={{ flex: 1 }}>
      <ActiveTab />
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <MenuItem icon="home" tabValue={"0"} setActiveTab={setActiveTab} />
        <MenuItem icon="search" tabValue={"1"} setActiveTab={setActiveTab} />
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ width: 44, height: 44 }}>
            <Image
              style={{ width: 44, height: 44 }}
              source={require("../../assets/bag.png")}
            />
          </TouchableOpacity>
        </View>
        <MenuItem
          icon={"favourite"}
          tabValue={"2"}
          setActiveTab={setActiveTab}
        />
        <MenuItem icon={"user"} tabValue={"3"} setActiveTab={setActiveTab} />
      </View>
    </View>
  );
}
