import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome
import { usePath } from "../../../../providers/PathContext";
import { useSkill } from "../../../../providers/SkillContext";
import { router } from "expo-router";
import { Image } from "expo-image";

const PathItem = ({ name, onPress }: { name: string; onPress: () => void }) => {
  return (
    <View style={styles.itemContainer}>
      <FontAwesome name="circle-o" style={styles.icon} />
      <Text style={styles.itemText}>{name}</Text>
      <Pressable onPress={onPress} style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View</Text>
      </Pressable>
    </View>
  );
};

const LearnPath = () => {
  const { selectedPath } = usePath();
  const { selectSkill } = useSkill();

  const handleSelectSkill = ({ id }: { id: string }) => {
    selectSkill(id);
    router.push(`/(tabs)/learn/${id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/placeholder.jpg")}
          contentFit="cover"
        />
        <Text style={styles.imageText}>{selectedPath?.name}</Text>
      </View>
      <Text style={styles.description}>{selectedPath?.description}</Text>
      <View>
        <FlatList
          data={selectedPath?.skills}
          renderItem={({ item }) => (
            <PathItem
              name={item.name}
              onPress={() => handleSelectSkill(item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default LearnPath;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#FFF",
  },
  imageContainer: {
    height: 150,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "DMMedium",
    marginBottom: 20,
  },
  imageText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#FFF",
    fontSize: 24,
    fontFamily: "DMMedium",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
    color: "#555",
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "DMMedium",
  },
  viewButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  viewButtonText: {
    color: "#000",
  },
});
