import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CheckList from '../screens/CheckList/CheckList'
import Splash from './../screens/Splash/Splash'
import LoginScreen from '../components/Login'

const StackNavigator = createSwitchNavigator(
    {
        Splash: {
            screen: Splash,
            Login: LoginScreen,
            
        },

        LoginScreen: {
            screen: LoginScreen
        },

        CheckList: {
            screen: CheckList
        },        
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
        mode: 'modal'
    }
)

export default createAppContainer(StackNavigator)