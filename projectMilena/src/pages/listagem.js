import React, { Component } from 'react';
import {
    Text, TouchableOpacity, TextInput,
    StyleSheet, View, ImageBackground, Image, Button, FlatList, Alert
} from 'react-native';

import api from '../services/api'

export default class Listagem extends Component {

    state = {
        productInfo: {},
        docs: [],
        page: 1
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/alunos?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ docs: [...this.state.docs, ...docs], productInfo, page })

    }

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page == productInfo.pages) return;
        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer} >
            <Text style={styles.productName}>{item.nomeA}</Text>
            <Text style={styles.productName}>{item.eemail}</Text>
            <Text style={styles.productName}>{item.sexo}</Text>

            <TouchableOpacity onPress= { () => {
                    Alert.alert(
                        'Deletar',
                        'Deseja realmente deletar?',
                        [
                            {
                                text: 'Não', onPress: () => 
                                    console.log('Cancel'),
                                    style: 'cancel'
                                    
                                },
                                {
                                    text: 'Sim', onPress: () => {
                                        api.delete(`/aluno/${item._id}`)
                                        .then(res => {
                                            this.loadProducts();
                                            Alert.alert(
                                                'Pronto',
                                                'Item deletado com sucesso'
                                            )
                                        })
                                        .catch(err => {
                                            'Erro',
                                            'Não foi pssível deletar'
                                        })
                                    }
                                }
                            
                        ]
                    )
                }} style={styles.botao}>
                    <Text style={styles.productButtonText}>Deletar</Text>
                </TouchableOpacity>
        </View>
    )


    render() {
        return (
            <View>

                <ImageBackground source={require('../images/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../images/logo.png')}
                            style={styles.logo}></Image>

                        <View>

                            <FlatList
                                contentContainerStyle={styles.list}
                                data={this.state.docs}
                                keyExtractor={item => item._id}
                                renderItem={this.renderItem}
                                onEndReached={this.loadMore}
                                onEndReachedThreshold={0.1}

                            />
                        </View>

                        <Text style={styles.page} >Para remover usuários insira o id</Text>

                        <TextInput
                            style={styles.id}
                            underlineColorAndroid='transparent'
                            placeholder='id do usuario'
                            onChangeText={(_id) => this.setState({ _id })}
                            value={this.state._id}

                        />

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
        marginTop: 5,
        margin: 20
    },
    fundo: {
        backgroundColor: '#BFEFFF',
        height: 620,
        marginTop: 30,
        borderRadius: 20,
        margin: 10
    },
    id: {
        width: 280,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 30
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 30,
        alignItems: 'center',
        marginLeft: 80,
        padding: 20,
        backgroundColor: "#ADD8E6",
   
    },
    productButtonText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    productContainer: {
        borderWidth: 0.5,
        borderColor: '#ADD8E6',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    productId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    productName: {
        fontSize: 14,
        color: '#4682B4',
        marginTop: 1,
        lineHeight: 24
    },
    list: {
        padding: 20
    },
    page: {
        color: '#104E8B',
        fontSize: 15,
        textAlign: 'center'
    },
})