import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, Text } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const imgDetalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {

static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.state.params.screen,
        // headerTintColor: "blue", cor do titulo
        headerStyle: { // cor de fundo da barra superior
            backgroundColor: "#19D1C8"
        }
    }
};

  render() {
    return (
      <View>

        <View style={styles.cabecalho}>
            <Image source={imgDetalheServico}/>
            <Text style={styles.txtTitulo}>Nosso servicos</Text>
        </View>

        <View style={styles.detalheServico}>
            <Text style={styles.txtDetalheServico}>. Consultoria </Text>
            <Text style={styles.txtDetalheServico}>. Processos</Text>
            <Text style={styles.txtDetalheServico}>. Acompanhamento de projetos</Text>
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
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 25
    },
    detalheServico: {
        marginTop: 20,
        padding: 20
    },
    txtDetalheServico: {
        fontSize: 18
    }
});
