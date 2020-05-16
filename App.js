import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {YellowBox} from 'react-native';
import Cita from './componentes/cita';
YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Paula', sintomas: 'Runny nose'},
    {id: '2', paciente: 'Coco', propietario: 'Pablo', sintomas: 'Coughing'},
    {id: '3', paciente: 'Jules', propietario: 'Paola', sintomas: 'Chickenpox'},
  ]);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Veterinary Clinic</Text>
      <Text style={styles.subtitulo}> Appointments Admin</Text>
      <FlatList
        data={citas}
        renderItem={({item}) => <Cita item={item} />}
        keyExtractor={cita => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    marginTop: 60,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  contenedor: {
    textAlign: 'center',
    backgroundColor: '#ccfff5',
    flex: 1,
    padding: 20,
  },
});

export default App;
