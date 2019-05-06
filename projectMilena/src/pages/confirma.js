import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button
} from 'react-native';

export default class Confirma extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../images/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../images/logo.png')}
                            style={styles.logo}></Image>

                        <Text style={styles.confirma} >Cadastro feito com sucesso!!</Text>

                        <Text style={styles.listar} >Para ver usuários cadastrados entre <Text  onPress={() => {
                                    this.props.navigation.navigate('Listar')
                                }} > .aqui. </Text> </Text>


                        <TouchableOpacity style={styles.botao}>
                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate('Cozinha')
                                }}
                                title="Continuar"
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
        marginTop: 50
    },
    confirma: {
        color: '#104E8B',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 100
    },
    listar: {
        color: '#104E8B',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 50
    },
    fundo: {
        backgroundColor: '#BFEFFF',
        height: 450,
        marginTop: 60,
        borderRadius: 30,
        margin: 10
    },
})