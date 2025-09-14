import { Text, View, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardBasico from '../components/CardBasico';
import Cardimg from '../components/Cardimg';

export default function HomePrincipal() {
  return (
    <View style={style.mainS}>
        <Text style={style.title} >Pagina Principal</Text>
        <CardBasico />
        <Cardimg />
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
});
