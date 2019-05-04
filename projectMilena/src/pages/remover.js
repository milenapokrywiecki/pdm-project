import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button, Alert
} from 'react-native';

import api from '../services/api'


export default class Remover extends Component {

    state = {
        _id: ""
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../images/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../images/logo.png')}
                            style={styles.logo}></Image>

                        <Text style={styles.remover}>Remoção de usuários</Text>

                        <TextInput 
                            style={styles.mail} 
                            underlineColorAndroid='transparent' 
                            placeholder='insira o id do usuario'
                            onChangeText={(_id) => this.setState({ _id })}
                            value={this.state._id}
                        />
                        
                        <TouchableOpacity style={styles.botao}>
                            <Button
                                onPress={() => {
                                   api.delete(`/aluno/${ this.state._id}`, {
                                       _id: this.state._id
                                   })
                                    alert('Usuário removido')
    
                                }}
                                    title="Remover"
                                    color='#ADD8E6' 
                                    />
                                 
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
    mail: {
        width: 280,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 100,
        marginLeft: 30
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 70
    },
    remover: {
        color: '#104E8B',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    fundo: {
        backgroundColor: '#BFEFFF',
        height: 500,
        marginTop: 90,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
})