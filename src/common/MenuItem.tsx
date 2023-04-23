import { Image, TouchableOpacity } from "react-native";
import React from "react";

const MenuItem = ({icon, tabValue, setActiveTab}) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => setActiveTab(tabValue)}
    >
      <Image
        source={require(`../../assets/${icon}.png`)}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default MenuItem;
