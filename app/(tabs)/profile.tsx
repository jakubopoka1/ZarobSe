import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Screen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8FAFC",
      }}
    >
      <Text>Ekran w budowie</Text>

      <View style={{ marginTop: 20, gap: 10, width: 160 }}>
        <Button title="Login" onPress={() => router.push("/login")} />

        <Button title="Register" onPress={() => router.push("/register")} />

        <Button title="Welcome" onPress={() => router.push("/welcome")} />
      </View>
    </View>
  );
}
