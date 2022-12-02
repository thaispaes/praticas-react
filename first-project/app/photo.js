import { StyleSheet, Text, View, Button, Image } from "react-native";
import Nezuko from "../src/assets/img/nezuko.png"

export default function Page({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Feliz Natal!!!</Text>
         <Image style={styles.img} source={{
          uri: 'https://www.pngitem.com/pimgs/m/525-5253530_padoru-padoru-nezuko-hd-png-download.png'}} />
        <Button color="#cc9cdf" onPress={() => navigation.goBack()} title="Voltar"/>
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
  },
  img: {
    width: '80%',
    height: 350
  }
});
