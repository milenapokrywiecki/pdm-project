import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, ScrollView
} from 'react-native';

export default class Cozinha extends Component {
    render() {
        return (
            <View>
                <View style={styles.fundo} >
                    <View style={styles.row} >

                        <Image style={styles.remedio}
                            source={require('../images/remedio.png')} ></Image>

                        <Image style={styles.info}
                            source={require('../images/info.png')} ></Image>
                    </View>

                    <Text style={styles.nome}
                        onPress={() => {
                            this.props.navigation.navigate('Relatorio')
                        }}>Josué</Text>

                    <Text onPress={() => {
                        this.props.navigation.navigate('Informa')
                    }} style={styles.infor} >Informa</Text>

                    <Image style={styles.imagem}
                        source={require('../images/bebe.png')} ></Image>

                    <View style={styles.row} >
                        <Image
                            style={styles.icon}
                            source={require('../images/mamadeira.png')}></Image>

                        <Image
                            style={styles.icon}
                            source={require('../images/agua.png')}
                        ></Image>

                        <Image style={styles.icon} source={require('../images/lampada.png')} ></Image>
                        <Image style={styles.icon} source={require('../images/clipboard.png')} ></Image>
                    </View>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#DDA0DD',
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
        marginTop: 50,
        fontSize: 20,
        color: 'white'
    },
    infor: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        color: 'white'
    },
    info: {
        left: 300,
        width: 30,
        height: 30,
    },
    icon: {
        width: 80,
        height: 100,
        margin: 5,
        marginTop: 70
    },
    row: {
        flexDirection: 'row'
    },
    remedio: {
        width: 30,
        height: 30
    }
})