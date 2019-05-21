import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity
} from 'react-native';

export default class Cozinha extends Component {
    render() {
        return (
            <View>
                <View style={styles.fundo} >
                    <View style={styles.row} >

                     <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Informa')
                            }}>
                            <Image
                                style={styles.info}
                                source={require('../images/info.png')}
                            ></Image>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.nome}>Josué</Text>

                    <Image style={styles.imagem}
                        source={require('../images/bebe.png')} ></Image>

                    <View style={styles.row} >
                    <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Cozinha')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../images/mamadeira.png')}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Banheiro')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../images/agua.png')}
                            ></Image>
                        </TouchableOpacity>

                        <Image style={styles.icon} source={require('../images/lampada.png')} ></Image>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Relatorio')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../images/clipboard.png')}
                            ></Image>
                        </TouchableOpacity>
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
    info: {
        width: 30,
        height: 30,
    },
    icon: {
        width: 80,
        height: 100,
        margin: 5,
        marginTop: 110
    },
    row: {
        flexDirection: 'row'
    }
})