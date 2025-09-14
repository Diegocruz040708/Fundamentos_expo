import { View, Text, StyleSheet, Image } from "react-native";

export default function Cardimg() {
  return (
    <View style={style.card}>
      <Image style={style.img} source={{ uri: 'https://www.xtrafondos.com/thumbs/1_5846.jpg' }} />
      <Text style={style.titulo}>Card con img</Text>
      <Text style={style.contenido}>Contenido del CardBasico</Text>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  titulo: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  contenido: {
    marginTop: 4,
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
