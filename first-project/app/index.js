import { Link } from 'expo-router'
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hello World!!</Text>
        <Text style={styles.subtitle}>Bem vindo ao App teste de Thais</Text>

        <Link href="/photo" >IMG</Link>
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
