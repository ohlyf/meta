import { TextInput } from "react-native";
import React from "react";

export default function AutoNextFocusTextInputs() {
  const ref1 = React.useRef<TextInput>(null);
  const ref2 = React.useRef<TextInput>(null);
  const ref3 = React.useRef<TextInput>(null);

  return (
    <>
      <TextInput
        ref={ref1}
        onSubmitEditing={() => ref2.current?.focus()}
        placeholder="姓名"
        textContentType="name"
        returnKeyType="next"
      />
      <TextInput
        ref={ref2}
        onSubmitEditing={() => ref3.current?.focus()}
        placeholder="电话"
        keyboardType="phone-pad"
        returnKeyType="next"
      />
      <TextInput ref={ref3} placeholder="地址" returnKeyType="done" />
    </>
  );
}
