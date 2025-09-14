import { StyleSheet, Text, SafeAreaView, StatusBar, Platform, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

export default function FormularioV2() {
    return (
        <ScrollView>
            <SafeAreaView style={style.mainS}>
                <ScrollView>
                    <Text style={style.title}>Formulario V2</Text>
                    <View style={style.container}>
                        <TouchableOpacity style={style.cerrarboton}>
                            <Ionicons name="close" size={20} color={'#fff'} />
                        </TouchableOpacity>
                        <Image style={style.avatar} source={{ uri: 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671116.jpg' }} />
                        <Text style={style.name}>Diego Cruz</Text>
                        <View style={style.infocontainer}>
                            <Text style={style.label}>Carrera:</Text>
                            <Text style={style.info}>Ingeniería en Sistemas Computacionales</Text>
                            <Text style={style.label}>Especialidad:</Text>
                            <Text style={style.info}>Desarrollo de Software</Text>
                            <Text style={style.label}>Correo:</Text>
                            <Text style={style.info}>cruzdiego040708@gmail.com</Text>
                            <Text style={style.label}>Teléfono:</Text>
                            <Text style={style.info}>1234567890</Text>
                            <Text style={style.label}>N.C:</Text>
                            <Text style={style.info}>0000000000</Text>

                        </View>
                        <TouchableOpacity style={style.botonConIcono}>
                            <Ionicons name="save" size={20} color={'#fff'} style={style.IconoIzquierda} />
                            <Text style={style.textoBoton}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ScrollView  >
    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#cbcbcb',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 15,
    },
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5,
    },
    avatar: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#dddddd',
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: '#ff0000',
        padding: 5,
    },
    infocontainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 10,
    },
    info: {
        fontSize: 13,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#e8e8e8',
        padding: 10,
    },
    textoBoton: {
        color: '#ffffffff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    botonConIcono: {
        backgroundColor: '#1f62ff',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
        width: '80%',
    },
    IconoIzquierda: {
        marginRight: 10,
    },
    cerrarboton: { 
        position: 'absolute',
        top: 15,
        right: 15,
        //zIndex: 10,
        backgroundColor: '#ff0000',
        borderRadius: 30,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },

});
