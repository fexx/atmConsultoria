import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, Text } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {

static navigationOptions = {
    title: 'Contato',
    headerStyle: { // cor de fundo da barra superior
        backgroundColor: "#61BD8C"
    }
};

  render() {
    return (
      <View>

        <View style={styles.cabecalho}>
            <Image source={detalheContatos}/>
            <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContato}>
            <Text style={styles.txtDetalheContato}>TEL: (11) 1234-5789</Text>
            <Text style={styles.txtDetalheContato}>CEL: (11) 1234-5789</Text>
            <Text style={styles.txtDetalheContato}>EMAIL: contato@atmconsultoria.com.br</Text>
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
    detalheContato: {
        marginTop: 20,
        padding: 20
    },
    txtDetalheContato: {
        fontSize: 18
    }
});
