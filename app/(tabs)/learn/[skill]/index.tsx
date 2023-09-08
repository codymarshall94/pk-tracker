import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSkill } from "../../../../providers/SkillContext";
import LinkComp from "../../../../components/Link";

function InfoItem({ title, content }: { title: string; content: string }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

export default function Skill() {
  const { selectedSkill } = useSkill();

  if (!selectedSkill) {
    return null;
  }

  const { name, description, prerequisite } = selectedSkill;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../assets/images/placeholder.jpg")}
            contentFit="cover"
          />
        </View>
        <InfoItem title="Name" content={name} />
        <InfoItem title="Description" content={description} />
        <InfoItem title="Prerequisite" content={prerequisite} />
        <View>
          <LinkComp
            text="Start Learning"
            route={`/(tabs)/learn/${name}/tasks`}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFF",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
  infoItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    backgroundColor: "#E9E9EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#7F9298",
  },
  content: {
    fontSize: 18,
    color: "#143540",
    fontWeight: "bold",
  },
});
