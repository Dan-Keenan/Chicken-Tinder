import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ChickenTinderApp from '../ChickenTinderApp'
import BasicInfo from '../screens/BasicInfo'
import UserType from '../screens/UserType'
import Lobby from '../screens/Lobby'

const screens = {
    BasicInfo: {
        screen: BasicInfo
    },
    UserType: {
        screen: UserType
    },
    Lobby: {
        screen: Lobby
    },
    ChickenTinderApp: {
        screen: ChickenTinderApp
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)