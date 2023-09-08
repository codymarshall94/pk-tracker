import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { useSkill } from "../../../../providers/SkillContext";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import LinkComp from "../../../../components/Link";

function TaskItem({
  text,
  checked,
  onChange,
}: {
  text: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <Pressable
      style={[styles.taskItem, checked ? styles.activeTask : null]}
      onPress={onChange}
    >
      <Text style={[styles.taskText, checked ? styles.activeText : null]}>
        {text}
      </Text>
      <FontAwesome
        name={checked ? "check-circle" : "circle-o"}
        color={checked ? "black" : "#000"}
        size={16}
        style={styles.icon}
      />
    </Pressable>
  );
}

const Tasks = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const { selectedSkill } = useSkill();

  const toggleTask = (task: string) => {
    if (completedTasks.includes(task)) {
      setCompletedTasks(completedTasks.filter((item) => item !== task));
    } else {
      setCompletedTasks([...completedTasks, task]);
    }
  };

  return (
    <View style={styles.container}>
      <View>
      <FlatList
        data={selectedSkill?.tasks}
        renderItem={({ item }) => (
          <TaskItem
            text={item}
            checked={completedTasks.includes(item)}
            onChange={() => toggleTask(item)}
          />
        )}
        keyExtractor={(item) => item}
      />
      </View>
      <View>
        <LinkComp text="Finish Tasks" route={`/(tabs)/learn/${selectedSkill?.name}`} />

      </View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
  },
  taskItem: {
    backgroundColor: "#E9E9EB",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeTask: {
    backgroundColor: "#272D34",
  },
  activeText: {
    color: "#FFF",
  },
  taskText: {
    flex: 2,
    fontSize: 18,
    color: "#143540",
    width: "80%",
  },
  icon: {
    marginLeft: 10,
    color: "#fff",
  },
});
