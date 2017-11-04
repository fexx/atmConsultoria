import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Image } from 'react-native';

import { StackNavigator } from 'react-navigation';

import CenaPrincipal from './src/components/cenaPrincipal';
import CenaClientes from './src/components/cenaClientes';
import CenaContato from './src/components/cenaContato';
import CenaEmpresa from './src/components/cenaEmpresa';
import CenaServico from './src/components/cenaServico';

const AppNav = StackNavigator({
  CenaPrincipal: { screen: CenaPrincipal},
  CenaClientes: { screen: CenaClientes},
  CenaContato: { screen: CenaContato},
  CenaEmpresa: { screen: CenaEmpresa},
  CenaServico: { screen: CenaServico}
},
{
  //headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white'
  }
});

export default class App extends Component {
  
  render() {    
    return (
        <AppNav />
    );
  }
}