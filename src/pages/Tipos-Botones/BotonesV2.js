import { Text, View, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BotonesV2() {
  return (
    <View style={style.mainS}>
        <Text style={style.title} >Botones Personalizados</Text>
        {/* Botón grande */}
        <TouchableOpacity style={style.botonGrande}>
            <Text style={style.textoBoton}>Botón Grande</Text>
        </TouchableOpacity>
        {/* Botón grande con icono */}
        <TouchableOpacity style={style.botonConIcono}>
            <Ionicons name="send" size={20} color={'#fff'} style={style.IconoIzquierda} />
            <Text style={style.textoBoton}>Botón Grande</Text>
        </TouchableOpacity>
         {/* Botón grande sombreado */}
        <TouchableOpacity style={[style.botonSombreado, style.sombra]}>
            <Text style={style.textoBoton}>Sombra</Text>
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    textoBoton: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },   
    botonGrande: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        alignSelf: 'center',
    },
    botonConIcono: {
        backgroundColor: '#c2a608',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
    },
    IconoIzquierda: {
        marginRight: 10,
    },
    botonSombreado: {
        marginTop: 10,
        backgroundColor: '#ff9800',
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 15,
    },
    sombra: {
        ...Platform.select({
            android: {
                elevation: 6,
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
        }),
    },
});
