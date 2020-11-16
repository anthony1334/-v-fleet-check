import React, {useState} from 'react'
import { View } from 'react-native'
import { Text, FAB } from 'react-native-paper'

import styles from './../../theme/theme'

import LottieView from 'lottie-react-native'

import Header from './../../components/header/Header'
import Login from './../../components/login/Login'

const Splash = ({ navigation }) => {
  const anim = require('./../../../assets/animations/3970-scanning-animation.json')
  const [disabledStatus, setDisabledStatus] = useState(true)

  const recievedFromLogin = (text) => {
    console.log(`Hey, something came from Login component : ${text}`)
    setDisabledStatus(false)
  }

  const loginComponent = disabledStatus ? 
      <Login updateCheckButton={recievedFromLogin} />
    : null

    return (
        <>
          <Header titleText="vFleetCheck" navigation={navigation} />
          <View style={styles.container}>
            <LottieView
              style={styles.lottieView}
              source={anim}
              loop={true}
              autoPlay={true}
            />

            { /* Login form component */}
            { loginComponent }
              <FAB
                style={styles.fab}
                small
                icon='check'
                label='Accéder à la checklist'
                onPress={() => navigation.navigate('CheckList')}
                disabled={disabledStatus}
              />
          </View>
        </>
    )
}



  export default Splash