import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Feature
} from 'react-native';
import Sound from 'react-native-sound';

const audioTests = [
    {
        isRequire: true,
        url: require('./choro.mp3'),
    },

];

function playSound(testInfo, component) {
    setTestState(testInfo, component, 'pending');

    const callback = (error, sound) => {
        if (error) {
            Alert.alert('error', error.message);
            setTestState(testInfo, component, 'fail');
            return;
        }
        setTestState(testInfo, component, 'playing');
        // Run optional pre-play callback
        testInfo.onPrepared && testInfo.onPrepared(sound, component);
        sound.play(() => {
            // Success counts as getting to the end
            setTestState(testInfo, component, 'win');
            // Release when it's done so we're not using up resources
            sound.release();
        });
    };
    if (testInfo.isRequire) {
        const sound = new Sound(testInfo.url, error => callback(error, sound));
    } else {
        const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
    }

}

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

                        <TouchableOpacity >
                            <Image
                                style={styles.remedio}
                                source={require('../images/remedio.png')}

                            ></Image>
                        </TouchableOpacity>


                    </View>

                    <Text style={styles.nome} onPress={() => {
                        this.props.navigation.navigate('Teste')
                    }}
                    >Josué</Text>

                    <Image style={styles.imagem}
                        source={require('../images/bebe.png')} ></Image>

                    <View style={styles.row} >

                        <TouchableOpacity>
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

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Quarto')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../images/lampada.png')}
                            ></Image>
                        </TouchableOpacity>

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
        marginTop: 50,
        fontSize: 20
    },
    remedio: {
        left: 295,
        width: 30,
        height: 30
    },
    icon: {
        width: 80,
        height: 100,
        margin: 5,
        marginTop: 110
    },
    row: {
        flexDirection: 'row'
    },
    info: {
        width: 30,
        height: 30
    }
})