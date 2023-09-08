import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

const Button = ({ text, route }: { text: string; route: any }) => {
  const handlePress = () => {
    router.push(route);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24292F",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: "auto",
  },
  text: {
    fontSize: 18,
    color: "#FBFFFF",
  },
});
