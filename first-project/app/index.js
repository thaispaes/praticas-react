import { Link } from 'expo-router'
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hello World!!</Text>
        <Text style={styles.subtitle}>Bem vindo ao App teste de Thais</Text>

        <Link href="/photo"><Text style={styles.link}>Clica aqui pra ter uma surpresa. Hihi</Text></Link>
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
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    paddingBottom: "50px"
  },
  link: {
    color: "#cc9cdf",
    fontSize: 20,
    backgroundColor: "#652d87",
    padding: "12px",
    borderRadius: "5px"
  }
});
