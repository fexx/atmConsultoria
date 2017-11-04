import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, Text } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {

static navigationOptions = {
    title: 'Clientes',
    headerStyle: { // cor de fundo da barra superior
        backgroundColor: "#B9C941"
    }
};

  render() {
    return (
      <View>

        <View style={styles.cabecalho}>
            <Image source={detalheCliente}/>
            <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
            <Image source={cliente1}/>
            <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>
            
        <View style={styles.detalheCliente}>
            <Image source={cliente2}/>
            <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
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
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});
