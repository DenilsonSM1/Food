import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from "expo-constants";
import { Banner } from "../components/banner";

const Responsividade = Constants.statusBarHeight
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsHorizontalScrollIndicator={false}
    >
      <View className="px-4 w-full mt-10" style={{marginTop: Responsividade + 8}}>
        <Header />

        <Banner/>
      </View>
    </ScrollView>
  );
}
