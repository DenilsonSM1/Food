import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View>
      <Pressable>
        <Ionicons name="menu-outline" size={30} color={"#121212"} />
      </Pressable>
    </View>
  );
}
