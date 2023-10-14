import { Pressable, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";

export default function App() {
  const baseStyle = {
    width: 50,
    height: 50,
    backgroundColor: "red",
  };

  const [doubleTap, setDoubleTap] = useState(false);
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          if (doubleTap) {
            // 双击逻辑
            console.log("Double tap detected");
          }
          setDoubleTap(true);
          setTimeout(() => {
            setDoubleTap(false);
          }, 300);
        }}
      >
        <Text>双击我</Text>
      </Pressable>
    </SafeAreaView>
  );
}
