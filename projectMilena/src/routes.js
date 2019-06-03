import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Cadastro from './pages/cadastro'
import Confirma from './pages/confirma'
import Cozinha from './pages/cozinha'
import Informa from './pages/informa'
import Recuperar from './pages/recuperar'
import Listar from './pages/listagem'
import Banheiro from './pages/banheiro'
import Quarto from './pages/quarto'
import Relatorio from './pages/relatorio'
import Prevencao from './pages/prevencao'
import Teste from './pages/teste'


export default createStackNavigator({
    Main,
    Cadastro,
    Confirma,
    Cozinha,
    Recuperar,
    Listar,
    Banheiro,
    Quarto,
    Relatorio,
    Prevencao,
    Informa,
    Teste

}, {
        headerMode: 'none',

        navigationOptions: {
            headerVisible: false,
        },
    })