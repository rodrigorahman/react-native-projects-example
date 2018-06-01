import React, {Component} from 'react';
import { View, Text} from 'react-native';
import stylesCore from "../stylesCore";


class SobreJogo extends Component {
    render() {
        return (
            <View style={stylesCore.tabbarHeight}>
                <Text style={{ flex: 1, background: '#61DB8C' }}>
                    Aqui podem ser apresentadas informações sobre o jogo
                </Text>
            </View>
        )
    }
}

export default SobreJogo;