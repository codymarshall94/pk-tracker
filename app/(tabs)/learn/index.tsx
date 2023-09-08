import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const learningPaths = [
  {
    id: 1,
    title: "Recommended",
    description: "Recommended learning paths for you",
    route: "recommended",
  },
  {
    id: 2,
    title: "Foundations",
    description: "Fundamentals of Parkour",
    route: "foundations",
  },
  {
    id: 3,
    title: "Beginner",
    description: "Beginner learning paths",
    route: "beginner",
  },
  {
    id: 4,
    title: "Intermediate",
    description: "Intermediate learning paths",
    route: "intermediate",
  },
  {
    id: 5,
    title: "Advanced",
    description: "Advanced learning paths",
    route: "advanced",
  },
];

const LearingPathItem = ({
  title,
  description,
  route,
}: {
  title: string;
  description: string;
  route: string;
}) => {
  return (
    <Link style={styles.itemContainer} href={`/learn/${route}`}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    </Link>
  );
};

const Learn = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Learn</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={learningPaths}
              renderItem={({ item }) => (
                <LearingPathItem
                  title={item.title}
                  description={item.description}
                  route={item.route}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    height: "100%",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#555555",
    alignSelf: "flex-start",
  },
  listContainer: {
    marginTop: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E9E9EB",
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#48666D",
  },
  itemDescription: {
    fontSize: 16,
    color: "#37515C",
  },
});
