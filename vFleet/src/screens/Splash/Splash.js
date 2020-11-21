import React, { useState, useEffect } from 'react'

import { View } from 'react-native'
import { Text, FAB, Button } from 'react-native-paper'

import styles, { colors } from './../../theme/theme'

import LottieView from 'lottie-react-native'
import Header from './../../components/header/Header'
import LoginScreen from '../LoginScreen/LoginScreen'
import CreateAccountScreen from '../CreateAccountScreen/CreateAccountScreen'
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
      
        </View> 
        {/*  <LottieView
              style={styles.lottieView}
              source={anim}
              loop={true}
              autoPlay={true}
            /> */}

        </View>
        {loginView}
        <View style={styles.container}>
        <FAB
          style={styles.fab}
          small
          icon='check'
          label='Accéder à la checklist'
          disabled={disabledStatus}
          onPress={() => navigation.navigate('CheckList')}
        />
      </View>
    </>
  )
}



export default Splash