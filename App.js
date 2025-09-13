import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={{width:150, height:150, borderRadius:75}} 
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'}} 
      />
      <Text style={styles.h1}>Bienvenidos</Text>
      <Text style={styles.h2}>a la clase de párrafos</Text>
      <Text style={styles.h3}>de la materia de Desarrollo de aplicaciones móviles</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b3ff',
  },
  h1: {
    fontSize: 30,
    borderRadius: 30,
    padding: 15,
  },
  h2: {
    fontSize: 20,
    borderRadius: 20,
    padding: 10,
  },
  h3: {
    fontSize: 15,
    borderRadius: 15,
    padding: 5,
  },
});