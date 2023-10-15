import { SafeAreaView, TextInput, Text } from "react-native";
import React, { useState } from "react";
import AutoNextFocusTextInputs from "./src/components/AutoNextFocusTextInputs";
import VerificationCode from "./src/components/VerificationCode";
export default function App() {
  const ref1 = React.useRef<TextInput>(null);
  const ref2 = React.useRef<TextInput>(null);
  const ref3 = React.useRef<TextInput>(null);

  return (
    <SafeAreaView>
      <VerificationCode />
    </SafeAreaView>
  );
}
