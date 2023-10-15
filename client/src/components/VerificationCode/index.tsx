import React from "react";
import { TextInput, View } from "react-native";

export default function VerificationCode() {
  const [verificationCode, setVerificationCode] = React.useState<number[]>([]);
  const refs = React.useRef<(TextInput | null)[]>([]);

  const handleVerificationCodeChange = (index: number, value: string) => {
    const newVerificationCode = [...verificationCode];
    if (value) {
      newVerificationCode[index] = Number(value);
      if (index < 5) {
        refs.current[index + 1]?.focus();
      }
    } else {
      newVerificationCode.splice(index, 1);
      if (index > 0) {
        refs.current[index - 1]?.focus();
      }
    }
    setVerificationCode(newVerificationCode);
  };

  const handleVerificationCodeKeyPress = (index: number, e: any) => {
    if (e.nativeEvent.key === "Backspace" && !verificationCode[index]) {
      handleVerificationCodeChange(index - 1, "");
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <TextInput
            key={index}
            ref={(ref) => (refs.current[index] = ref)}
            style={{ borderBottomWidth: 2, width: 10, marginLeft: 10 }}
            maxLength={1}
            value={verificationCode[index]?.toString() ?? ""}
            onChangeText={(text) => handleVerificationCodeChange(index, text)}
            onKeyPress={(e) => handleVerificationCodeKeyPress(index, e)}
          />
        ))}
      </View>
    </View>
  );
}
