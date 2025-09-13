import { Text, View, StyleSheet, Platform, StatusBar } from 'react-native';

export default function Butones() {
  return (
    <View style={style.mainS}>
        <Text>Botones</Text>
    </View>
  );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#00b3ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
    }
});
