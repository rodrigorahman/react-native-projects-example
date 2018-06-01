import React, {Component} from 'react';
import {View, Image, StyleSheet, Platform, Text} from 'react-native';
import stylesCore from "../stylesCore";

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

class Resultado extends Component {

  state = {
    resultado: ''
  };

  constructor(props) {
    super(props);

  }

  componentWillMount() {
   const numAleatorio = Math.floor(Math.random() * 2);
   let caraOuCoroa = '';

   if(numAleatorio === 0){
     caraOuCoroa = 'cara';
   }else{
     caraOuCoroa = 'coroa';
   }

   this.setState({resultado: caraOuCoroa});

  }


  render() {
    const { resultado } = this.state;
    return (
      <View style={[stylesCore.tabbarHeight, styles.resultado]}>
        {(resultado === 'cara') && <Image source={cara} />}
        {(resultado === 'coroa') && <Image source={coroa} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Resultado;