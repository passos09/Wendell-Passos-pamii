import { Text, StyleSheet } from "react-native";

export default function CabecalhoLogin() {
  return (
    <>
      <Text style={styles.titulo}>
        Boas-vindas de volta!
      </Text>

      <Text style={styles.subtitulo}>
        Estamos muito felizes em te ver novamente!
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitulo: {
    color: "#b5bac1",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 25,
  },
});