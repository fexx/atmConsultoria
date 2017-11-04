import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 30,
    height: 80,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});
