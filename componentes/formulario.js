import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert, ScrollView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarForm}) => {

  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [sintomas, guardarSintomas] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    guardarFecha(date.toLocaleDateString('en-US', opciones));
    hideDatePicker();
  };

   const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

    const confirmarHora = (time) => {
    const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
   guardarHora(time.toLocaleString('en-US', opciones));
    hideTimePicker();
  };

 const crearNuevaCita = () => {
   if(paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '' || hora.trim() === '' || fecha.trim() === '' || sintomas.trim() === ''){
     mostrarAlerta();
    return;
   } 

   //crear nueva cita

   const cita = {paciente, propietario, telefono, sintomas, hora, fecha};
   cita.id = shortid.generate();
   
   // agregar al state 

   const citasNuevo = [...citas, cita];
   setCitas(citasNuevo);

   //ocultar formulario 
guardarMostrarForm(false);


   //resetear formulario 


 }

 const mostrarAlerta = () => {
   Alert.alert(
     'Ops!', 
     'Some fields are empty',
     [{
       text: 'Retry'
     }]
   )
 }


  return (
    <>
    <Text style={styles.subtitulo2}> Create New Appointment</Text>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.label}> Pet Name </Text>
          <TextInput 
          style={styles.input}  
          onChangeText = {texto=> guardarPaciente(texto)} />
        </View>
        <View>
          <Text style={styles.label}> Pet Owner Name </Text>
          <TextInput 
          style={styles.input} 
          onChangeText = {texto=> guardarPropietario(texto)}/>
        </View>
         <View>
          <Text style={styles.label}> Phone Number </Text>
          <TextInput style={styles.input}  keyboardType='numeric' onChangeText = {texto=> guardarTelefono(texto)}/>
        </View>
        <View>
          <Text style={styles.label}> Symptoms </Text>
          <TextInput multiline style={styles.input} onChangeText = {texto=> guardarSintomas(texto)}/>
        </View>
          <View>
          <Text style={styles.label}> Date </Text>
      <Button title="Select Date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={confirmarFecha}
        onCancel={hideDatePicker}
        headerTextIOS = 'Pick a date'
      />
      <Text style={styles.subtitulo2}>{fecha}</Text>
    </View>
    <View>
      <Text style={styles.label}> Time </Text>
      <Button title="Select Time" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="date"
        onConfirm={confirmarHora}
        onCancel={hideTimePicker}
        headerTextIOS = 'Pick a time'
      />
      <Text style={styles.subtitulo2}>{hora}</Text>
    </View>
    <View style={styles.btnSaveContainer}>
        <TouchableHighlight
          style={styles.btnSave}
          onPress={() => crearNuevaCita()}>
          <Text style={styles.textoSave}>Save</Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  },
  input: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255,0.4)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  subtitulo2: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  btnSaveContainer: {
    alignItems: 'center'
  },
  btnSave: {
    backgroundColor: '#00ffaa',
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
  },
  textoSave: {
    fontSize: 14,
    color: '#660000',
    fontWeight: 'bold',
  }
});

export default Formulario;
