import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text
} from 'react-native';

export default class Cozinha extends Component {
    render() {
        return (
            <View>
                <View style={styles.fundo} >

                    <Text style={styles.nome}>Josué</Text>

                    <Text onPress={() => {
                        this.props.navigation.navigate('Informa')
                    }} style={styles.infor} >Informa</Text>

                    <Image style={styles.imagem}
                        source={require('../images/bebe.png')} ></Image>

                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#EEDC82',
        width: '100%',
        height: '100%'
    },
    imagem: {
        width: 210,
        height: 250,
        marginLeft: 75,
        marginTop: 120
    },
    nome: {
        textAlign: 'center',
        marginTop: 70,
        fontSize: 20
    },
    infor: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20
    },
    info: {
        left: 330,
        width: 30,
        height: 30
    }
})