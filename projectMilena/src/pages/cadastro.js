import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button
} from 'react-native';

import Axios from 'axios';

export default class Cadastro extends Component {

    state = {
        docs: []
    }

    klikPost(){
        var url = 'http://192.168.62.40:3001/api';
        Axios.post(url, {
          nomeA: this.state.input1,
          eemail: this.state.input2,
          senha: this.state.input3,
          sexo: this.state.input4
        })
      };
    

    render() {
        return (
            <View>
                <ImageBackground source={require('../images/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../images/logo.png')}
                            style={styles.logo}></Image>


                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Nome completo'
                            onChangeText={(text) => this.setState({ input: text })}
                            
                        ></TextInput>


                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='E-mail'
                            onChangeText={(text) => this.setState({ input2: text })}
                            value={this.state.input2}
                        ></TextInput>

                        <TextInput secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Senha'
                            onChangeText={(text) => this.setState({ input3: text })}
                            value={this.state.input3} ></TextInput>

                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Sexo'
                            onChangeText={(text) => this.setState({ input4: text })}
                            value={this.state.input4} ></TextInput>


                        <TouchableOpacity style={styles.botao}>
                            <Button
                                onPress={( ) => {
                                    this.klikPost.bind(this)
                                }} 
                                   // this.props.navigation.navigate('Confirma')
                                   
                                
                                title="Cadastrar"
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
        height: 500,
        marginTop: 90,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
})