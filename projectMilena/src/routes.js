import {createStackNavigator} from 'react-navigation';
import Main from './pages/main';
import Cadastro from './pages/cadastro'
import Confirma from './pages/confirma'
import Cozinha from './pages/cozinha'
import Informa from './pages/informa'
import Recuperar from './pages/recuperar'
import Listar from './pages/listagem'
import Remover from './pages/remover'

export default createStackNavigator({
    Main,
    Cadastro,
    Confirma,
    Cozinha,
    Informa,
    Recuperar,
    Listar,
    Remover
}, {
    //remoção do header
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
})