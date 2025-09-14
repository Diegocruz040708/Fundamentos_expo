import { StyleSheet, Text, SafeAreaView, StatusBar, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomePrincipal() {
    return (
        <ScrollView>
            <SafeAreaView style={style.mainS}>
                <Text style={style.title}>Registro de Alumno</Text>
                <Text style={style.label}>Nombre</Text>
                <TextInput style={style.input} placeholder='Escribe tu nombre' />
                <Text style={style.label}>Carrera</Text>
                <TextInput editable={true} style={style.input} placeholder='Escribe tu carrera' />
                <Text style={style.label}>Descripción</Text>
                <TextInput multiline={true} numberOfLines={4} style={[style.input, style.textArea]} placeholder='Describe tu personalidad' />
                <Text style={style.label}>Correo Electronico</Text>
                <TextInput style={style.input} placeholder='Ingrese el correo' keyboardType='email-address' />
                <Text style={style.label}>Contraseña</Text>
                <TextInput style={style.input} placeholder='************' secureTextEntry />
                <Text style={style.label}>Teléfono</Text>
                <TextInput style={style.input} placeholder='1234567890' keyboardType='numeric' />
                <TouchableOpacity style={style.botonConIcono}>
                    <Ionicons name="send" size={20} color={'#fff'} style={style.IconoIzquierda} />
                    <Text style={style.textoBoton}>Botón Grande</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#ffffffff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 15,
        padding: 10,
    },
    textoBoton: {
        color: '#ffffffff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    botonConIcono: {
        backgroundColor: '#3a73f9',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
    },
    IconoIzquierda: {
        marginRight: 10,
    },
});
