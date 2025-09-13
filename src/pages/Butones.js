import { Text, View, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';

export default function Butones() {
  return (
    <View style={style.mainS}>
        <Text style={style.h1} >Botones</Text>
        {/* Botón 1 */}
        <TouchableOpacity style={style.botonBasico}>
            <Text style={style.text}>Botón 1</Text>
        </TouchableOpacity>
        {/* Botón 2 */}
        <TouchableOpacity style={style.botonIcono}>
            <Text style={style.text}>Botón Icono</Text>
        </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#00b3ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    h1: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    botonBasico: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
