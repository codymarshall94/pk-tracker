import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";

const LinkComp = ({ text, route }: { text: string; route: any }) => {
  return (
    <Link style={styles.container} href={route}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
};
export default LinkComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292F",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#FBFFFF",
  },
});
