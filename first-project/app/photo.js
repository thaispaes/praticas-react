import { StyleSheet, Text, View, Button } from "react-native";

export default function Page({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>ASSISTA DEMON SLAYER</Text>

        <Button onPress={() => navigation.goBack()} title="Voltar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#652d87",
    justifyContent: "center"
  },
  title: {
    fontSize: 64,
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingBottom: "50px"
  }
});
