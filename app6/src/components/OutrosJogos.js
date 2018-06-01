import React, {Component} from 'react';
import { View, Text } from 'react-native';

import stylesCore from '../stylesCore';

class OutrosJogos extends Component {
    render() {
        return (
            <View style={stylesCore.tabbarHeight}>
                <Text style={{ flex: 1, background: '#61DB8C' }}>
                    Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor
                </Text>
            </View>
        )
    }
}

export default OutrosJogos;