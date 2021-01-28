import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'

const screens = {
    Home: {

    }
}

const HomeStack = createStackNavigator(screens);