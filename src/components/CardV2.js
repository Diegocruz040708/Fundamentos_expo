import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CardV2() {
    return (
        <View style={style.card}>
            <Image style={style.img} source={{ uri: 'https://www.xtrafondos.com/thumbs/1_5846.jpg' }} />
            <View style={style.card_contenido}>
                <Text style={style.titulo}>Card con img</Text>
                <Text style={style.contenido}>Contenido del CardBasico</Text>
                <TouchableOpacity style={style.botonSombreado}>
                    <Text style={style.texto}>Sombra</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        //padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 6,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 },
    },
    card_contenido: {
        padding: 16,
        //backgroundColor: '#ff9898',
    },
    titulo: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    contenido: {
        marginBottom: 12,
        fontSize: 12,
        color: '#000000',
    },
    img: {
        width: '100%',
        height: 180,
        //borderRadius: 10,
    },
    botonSombreado: {
        marginTop: 10,
        backgroundColor: '#ff9800',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 10,
        alignSelf: 'flex-start',
        //marginBottom: 15,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 12,
    },


});
