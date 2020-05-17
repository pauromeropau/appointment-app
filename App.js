import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Platform, Keyboard} from 'react-native';
import {YellowBox} from 'react-native';
import Cita from './componentes/cita';
import Formulario from './componentes/formulario';
YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => {
  const [mostrarform, guardarMostrarForm] = useState(false);
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Paula', sintomas: 'Runny nose', phone: '754-3010'},
    {id: '2', paciente: 'Coco', propietario: 'Pablo', sintomas: 'Coughing', phone: '754-4538'},
    {id: '3', paciente: 'Jules', propietario: 'Paola', sintomas: 'Chickenpox', phone: '754-9474'},
  ]);

  const eliminarPaciente = id => {
    setCitas(citasActuales => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  const mostrarFormulario = () => {
  guardarMostrarForm(!mostrarform);
  }

const cerrarTeclado = () => {
Keyboard.dismiss();
}

  return (
<TouchableWithoutFeedback onPress = {()=> cerrarTeclado()}>
    <View style={styles.contenedor}>

      <Text style={styles.titulo}> Veterinary Clinic</Text>
      <Text style={styles.subtitulo}>
        {citas.length > 0 ? 'Manage Appointments' : ''}
      </Text>


 <View>
        <TouchableHighlight
          style={styles.btnMostrarForm}
          onPress={() => mostrarFormulario()}>
          <Text style={styles.textoMostrarForm}> {mostrarform ? 'Close' : 'New Appointment'}</Text>
        </TouchableHighlight>
      </View>
       
      
      <View style={styles.contenido}> 
      {mostrarform ? (<Formulario citas = {citas} setCitas={setCitas} guardarMostrarForm = {guardarMostrarForm}/>) : (<><Text style={styles.subtitulo2} >Appointments</Text>



      <FlatList
        style={styles.listado}
        data={citas}
        renderItem={({item}) => (
          <Cita item={item} eliminarPaciente={eliminarPaciente} />
        )}
        keyExtractor={cita => cita.id}
      /></>)}
      </View>

    </View>
</TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titulo: {
    marginTop: Platform.OS == 'ios' ? 40  : 20,
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
  subtitulo2: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  contenedor: {
    textAlign: 'center',
    backgroundColor: '#ccfff5',
    flex: 1,
    padding: 20,
    
  },
  contenido: {
    flex: 1
  }, 
  listado: {
    flex: 1
  },
  btnMostrarForm: {
    backgroundColor: '#00ffaa',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  textoMostrarForm: {
    padding: 5,
    fontSize: 14,
    color: '#660000',
    fontWeight: 'bold',
  }
});

export default App;
