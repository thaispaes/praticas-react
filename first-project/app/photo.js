import { StyleSheet, Text, View, Button } from "react-native";

export default function Page({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Pagina da Imagem</Text>

        <Button onPress={() => navigation.goBack()} title="Voltar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
