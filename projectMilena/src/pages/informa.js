import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button
} from 'react-native';


export default class Informa extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../images/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../images/logo.png')}
                            style={styles.logo}></Image>

                        <Text style={styles.tipo} >Tipo 1: </Text>
                        <Text style={styles.texto} >Quando o bebê chora emitindo o som "nhê", é o reflexo que o bebê faz para sugar.</Text>

                        <Text style={styles.tipo} >Tipo 2: </Text>
                        <Text style={styles.texto} >Quando o bebê chora emitindo o som "aa", é reflexo que o bebê tem para bocejo.</Text>

                        <Text style={styles.tipo} >Tipo 3: </Text>
                        <Text style={styles.texto} >Quando o bebê chora emitindo o som "heh", é o reflexo de desconforto</Text>

                        <Text style={styles.tipo} >Tipo 4: </Text>
                        <Text style={styles.texto} >Quando o bebê chora emitindo o som "éar", é para emitir dor.</Text>


                        <TouchableOpacity style={styles.botao}>
                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate('Cozinha')
                                }}
                                title="Voltar"
                                color='#ADD8E6' />
                        </TouchableOpacity>



                    </View>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imagemFundo: {
        width: '100%',
        height: '100%'
    },
    logo: {
        alignItems: 'center',
        marginTop: 25
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 20
    },
    texto: {
        color: '#104E8B',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5
    },
    tipo: {
        color: '#104E8B',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 5
    },
    fundo: {
        backgroundColor: '#BFEFFF',
        height: 550,
        marginTop: 90,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
})