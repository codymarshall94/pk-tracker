import { Stack, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

function StackIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  onPress?: () => void;
}) {
  return <FontAwesome size={14} style={styles.container} {...props} />;
}

const SkillLayout = () => {
  const handleBack = () => {
    router.back();
  };
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTitle: "Skill" }}
      />
      <Stack.Screen
        name="tasks"
        options={{
          headerTitle: "Tasks",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "DMBold",
          },
          headerLeft: () => (
            <StackIcon name="chevron-left" color="#000" onPress={handleBack} />
          ),
        }}
      />
    </Stack>
  );
};

export default SkillLayout;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#E8E8E8",
    borderRadius: 50,
    justifyContent: "center",
  },
});
