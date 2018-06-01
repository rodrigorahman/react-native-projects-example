import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');


class Principal extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.apresentacaoJogo}>
          <Image source={logo}></Image>
          <TouchableHighlight onPress={() => {
            Actions.push('resultado')
          }}>
            <Image source={btnJogar}></Image>
          </TouchableHighlight>
        </View>
        <View style={styles.rodape}>
          <TouchableHighlight onPress={() => {
            Actions.push('sobrejogo')
          }}>
            <Image source={btnSobreJogo}></Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
            Actions.push('outrosjogos')
          }}>
            <Image source={btnOutrosJogos}></Image>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C',
    padding: 5
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Principal;