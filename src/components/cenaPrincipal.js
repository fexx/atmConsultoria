import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BarraNavegacao from './barraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContanto = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
   
    const navigation = this.props.navigation;
    const { navigate } = navigation;
    /*
    <StatusBar backgroundColor='#CCC'/>
    <BarraNavegacao/>
    */
    return (
      <View style={styles.container}>
        

        <View style={styles.logo}>
          <Image source={logo}/>
        </View>

        <View style={styles.menu}>

          <View style={styles.menuGrupo}>
            <TouchableHighlight 
              underlayColor={'#B9C941'}
              activeOpacity={0.3}
              onPress={()=> navigate('CenaClientes')}>
              <Image style={styles.imgMenu} source={menuCliente}/>
            </TouchableHighlight>

            <TouchableHighlight 
              underlayColor={'#61BD8C'}
              activeOpacity={0.3}
              onPress={()=> navigate('CenaContato')}>
              <Image style={styles.imgMenu} source={menuContanto}/>
            </TouchableHighlight>
          </View>

          <View style={styles.menuGrupo}>
          <TouchableHighlight 
              underlayColor={'#EC7148'}
              activeOpacity={0.3}
            onPress={()=> navigate('CenaEmpresa')}>
            <Image style={styles.imgMenu} source={menuEmpresa}/>
          </TouchableHighlight>

          <TouchableHighlight 
            underlayColor={'#19D1C8'}
            activeOpacity={0.3}
            onPress={()=> navigate('CenaServico', {screen: "Serviços"})}>
            <Image style={styles.imgMenu} source={menuServico}/>
          </TouchableHighlight>
          </View>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
