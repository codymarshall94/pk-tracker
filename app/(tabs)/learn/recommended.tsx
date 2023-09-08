import React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { TEST_DATA } from "../../../data/test";
import { router } from "expo-router";
import { useSkill } from "../../../providers/SkillContext";

const RecommendedItem = ({
  item,
  handlePress,
}: {
  item: any;
  handlePress: any;
}): JSX.Element => {
  return (
    <Pressable onPress={() => handlePress(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default function Recommended() {
  const testMap = TEST_DATA.vaults.beginner;
  const { selectSkill } = useSkill();

  const handlePress = (skill: any) => {
    selectSkill(skill);
    router.push(`/(tabs)/learn/${skill.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Options</Text>
      <Text style={styles.subTitle}>
        These options are recommended for you based on your profile.
      </Text>
      <View style={styles.listContainer}>
        <FlatList
          data={testMap}
          renderItem={({ item }) => (
            <RecommendedItem item={item} handlePress={handlePress} />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  listContainer: {
    width: "100%",
  },

  itemContainer: {
    flex: 1,
    backgroundColor: "#E9E9EB",
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionDescription: {
    fontSize: 16,
  },
});
