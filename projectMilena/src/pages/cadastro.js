import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button, Picker
} from 'react-native';

import api from '../services/api'

export default class Cadastro extends Component {

    state = {
        nomeA: "",
        eemail: "",
        senha: "",
        sexo: ""
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../images/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../images/logo.png')}
                            style={styles.logo} />


                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Nome completo'
                            onChangeText={(nomeA) => this.setState({ nomeA })}
                            value={this.state.nomeA}
                        />

                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='E-mail'
                            onChangeText={(eemail) => this.setState({ eemail })}
                            value={this.state.eemail}
                        />

                        <TextInput secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Senha'
                            onChangeText={(senha) => this.setState({ senha })}
                            value={this.state.senha}
                        />

                        <TextInput
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Sexo'
                            value={this.state.sexo}
                            onChangeText={(text) => this.setState({ sexo: text })}
                        />

                        <TouchableOpacity
                            style={styles.botao} >
                            <Button onPress={() => {
                                api.post('/aluno', {
                                    nomeA: this.state.nomeA,
                                    eemail: this.state.eemail,
                                    senha: this.state.senha,
                                    sexo: this.state.sexo
                                })
                                alert('Cadastrado')
                               
                            }}
                                title="Cadastrar"
                                color='#ADD8E6' />
                            
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao}>
                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate('Confirma')
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
    input: {
        width: 280,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 25,
        margin: 30,
        marginBottom: 10
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 15
    },
    fundo: {
        backgroundColor: '#BFEFFF',
        height: 520,
        marginTop: 50,
        borderRadius: 30,
        margin: 10,
        marginRight: 10
    },
    buttonCreateText: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 15
    },
})