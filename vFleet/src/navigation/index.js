import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CheckList from '../screens/CheckList/CheckList'
import Splash from './../screens/Splash/Splash'
import Recap from '../screens/Recap/Recap'
import Camera from './../screens/Camera/Camera'

const StackNavigator = createSwitchNavigator(
    {
        Splash: {
            screen: Splash,            
        },

        CheckList: {
            screen: CheckList
        },

        Recap:{
            screen: Recap
        },
        Camera: {
            screen: Camera
        }
        
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
        mode: 'modal'
    }
)

export default createAppContainer(StackNavigator)