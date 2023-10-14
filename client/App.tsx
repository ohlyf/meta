import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView, TextInput, Text } from "react-native";
import React, { useState } from "react";
import AutoNextFocusTextInputs from "./src/components/AutoNextFocusTextInputs";
import VerificationCode from "./src/components/VerificationCode";
export default function App() {
  const ref1 = React.useRef<TextInput>(null);
  const ref2 = React.useRef<TextInput>(null);
  const ref3 = React.useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
