import { Text, View, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ListaAlumnos() {
  return (
    <View style={style.mainS}>
        <Text style={style.texto}>Lista de Alumnos</Text>
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
    texto: {
    },
});
