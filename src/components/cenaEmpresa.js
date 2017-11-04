import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, Text } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const imgDetalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {

static navigationOptions = {
    title: 'Empresa',
    headerStyle: { // cor de fundo da barra superior
        backgroundColor: "#EC7148"
    }
};

  render() {
    return (
      <View>

        <View style={styles.cabecalho}>
            <Image source={imgDetalheEmpresa}/>
            <Text style={styles.txtTitulo}>Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
            <Text style={styles.txtDetalheEmpresa}>A ATM consultoria está no mercado a mais de 20 anos... </Text>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        marginTop: 20,
        padding: 20
    },
    txtDetalheEmpresa: {
        fontSize: 18
    }
});
