import { Text, View, StyleSheet, Platform, StatusBar, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ListaAlumnos() {
    return (
        <SafeAreaView style={style.mainS}>
            {/* Inicio da AppBar */}
            <View style={style.appBar}>
                <Ionicons name="arrow-back" size={20} color={'#000'} />
                <Text style={style.appBarTitle}>Lista de Usuarios</Text>
                <View style={{ width: 20 }}></View>
            </View>
            {/* Fin de AppBar */}
            {/* Inicio de Contenido (Lista de alumnos)*/}
            <ScrollView style={{ padding: 16 }}>
                <Text style={style.sectionTitle}>Alumnos de Aplicaciones Moviles</Text>
                <View style={style.card}>
                    <Image style={style.avatar} source={{ uri: 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671116.jpg' }} />
                    <View style={style.cardInfo}>
                        <Text style={style.username}>Diego Cruz</Text>
                        <Text style={style.userDetails}>Ingeniería en Sistemas Computacionales</Text>
                        <TouchableOpacity style={style.saveButton}>
                            <Text style={style.saveButtonText}>Ver más</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* Fin de Contenido (Lista de alumnos)*/}

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        //padding: 16,
    },
    appBar: {
        height: 50,
        width: '100%',
        backgroundColor: '#e88aff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    appBarTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 16,
    },
    card: {
        padding: 12,
        flexDirection: 'row',
        borderRadius: 16,
        backgroundColor: '#fff',
        elevation: 2,
        marginBottom: 5,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 12,
    },
    cardInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    userDetails: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: '#1f62ff',
        marginTop: 10,
        padding: 10,
        alignSelf: 'flex-end',
        paddingVertical: 6,
        borderRadius: 15,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

});
