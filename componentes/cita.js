import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const Cita = ({item}) => {
  const dialogoEliminar = () => {
    console.log('delete');
  }

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Pet Name:</Text>
        <Text style={styles.texto}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Pet Owner Name:</Text>
        <Text style={styles.texto}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Symptoms:</Text>
        <Text style={styles.texto}>{item.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight style={styles.btnEliminar} onPress={()=> dialogoEliminar()}>
          <Text style={styles.textoEliminar}>Delete &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255,0.4)',
    marginBottom: 10,
    borderBottomColor: '#b3fff0',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
  },
  texto: {
    fontWeight: '200',
    fontSize: 16,
  },
  btnEliminar: {
    backgroundColor: '#ff9999',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
    width: '25%',
  },
  textoEliminar: {
    fontSize: 14, 
    color: '#660000',
    fontWeight: '200',
  }
});

export default Cita;
