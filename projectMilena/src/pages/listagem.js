import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button, FlatList
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

    loadProducts = async (page=1) => {
        const response = await api.get(`/alunos?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ docs: [...this.state.docs, ...docs], productInfo, page })

    }

    loadMore = () => {
        const { page, productInfo } = this.state;

        if(page == productInfo.pages) return;
        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer} >
            <Text style={styles.productId}>{item._id}</Text>
            <Text style={styles.productName}>{item.nomeA}</Text>
            <Text style={styles.productName}>{item.eemail}</Text>
            <Text style={styles.productName}>{item.sexo}</Text>
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

                        <TouchableOpacity style={styles.botao}>
                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate('Confirma')
                                }}
                                title="Voltar"
                                color='#ADD8E6' />
                        </TouchableOpacity>

                        <Text style={styles.listar} >Para remover usuários entre <Text onPress={() => {
                            this.props.navigation.navigate('Remover')
                        }} > .aqui. </Text> </Text>


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
        marginTop: 15
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 115
    },
    fundo: {
        backgroundColor: '#BFEFFF',
        height: 600,
        marginTop: 20,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        flex: 1
    },
    productButton: {
        height: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ADD8E6',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    productButtonText: {
        fontSize: 14,
        color: '#ADD8E6',
        fontWeight: 'bold'
    },
    productContainer:{
        borderWidth: 1,
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
    productName:{
      fontSize: 14,
      color: '#4682B4',
      marginTop: 5,
      lineHeight: 24
    },
    list: {
        padding: 20
    }
})