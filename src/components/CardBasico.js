import { View, Text, StyleSheet } from "react-native";

export default function CardBasico() {
  return (
    <View style={style.card} >
        <Text style={style.titulo}>Titulo de card</Text>
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
    shadowOpaxcity: 0.5,
    shadowRadius: 4,
  },
    titulo: { 
    fontSize: 14,
    fontWeight: 'bold',
    },
    contenido: {
    marginTop: 4,
    },
});
