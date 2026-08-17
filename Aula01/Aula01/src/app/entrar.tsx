import { StyleSheet, View } from "react-native";

import CabecalhoLogin from "./components/CabecalhoLogin";

export default function Entrar() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CabecalhoLogin />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313338",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 420,
    padding: 30,
    backgroundColor: "#2b2d31",
    borderRadius: 5,
  },
});