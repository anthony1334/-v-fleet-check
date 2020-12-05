import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, FAB, Button } from 'react-native-paper'
import styles, { colors } from './../../theme/theme'
import LottieView from 'lottie-react-native'
import Header from './../../components/header/Header'
import LoginScreen from '../LoginScreen/LoginScreen'
import CreateAccountScreen from '../CreateAccountScreen/CreateAccountScreen'
import Login from './../../components/login/Login'
import axios from 'axios'

const Splash = ({ navigation }) => {
  const anim = require('./../../../assets/animations/3970-scanning-animation.json')
  const [disabledStatus, setDisabledStatus] = useState(true)

  // Fonction qui sera appelée à partir de Login.js (callback)
  const receivedFromLogin = (user, rememberMe) => {
    console.log(`Hey, something came from Login component : ${JSON.stringify(user)}`)
    axios.post(
      'http://localhost:3000/api/v1/user',
      { user }
    ).then((response) => {
      if (response.status === 200) {
        setDisabledStatus(false)
        if(rememberMe){
          localStorage.setItem("vFleetUser",JSON.stringify(item))
        }
      }
    })
  } 

  useEffect(()=>{
    const user = localStorage.getItem("vFleetUser")
    if (user !== null) {
      setDisabledStatus(false)
    }
  },[])

  const loginView = disabledStatus ?  <Login navigation={navigation} updateCheckButton={receivedFromLogin}></Login> : null

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