/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  clicado = () => {
    Alert.alert('Clicou no botão');
  }

  render() {
    return (
      <View style={ styles.estiloView }>
        <Text style={ styles.estiloTexto }>Frades do Dia</Text>
        <Text style={ styles.estiloTexto }>Frades do Dia</Text>
        <Text style={ styles.estiloTexto }>Frades do Dia</Text>
        <TouchableOpacity style={styles.botao} onPress={this.clicado}>
          <Text style={styles.TextoBotao}>botão controlado</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#0385E7',
    width: 50,
    height: 50
  },

  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }



});
