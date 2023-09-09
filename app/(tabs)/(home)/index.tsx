import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi, Cody!</Text>
          <Text style={styles.subGreeting}>Your Goals</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  header: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  greeting: {
    fontSize: 18,
    color: "#7F7F7F",
  },
  subGreeting: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#555555",
  },
  trainingInfo: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  continueButton: {
    backgroundColor: "#FF5959",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
