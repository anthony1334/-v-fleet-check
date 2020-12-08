import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, FAB, Button } from 'react-native-paper'
import styles, { colors } from './../../theme/theme'
import LottieView from 'lottie-react-native'
import Header from './../../components/header/Header'
import Login from './../../components/login/Login'
import LoginVehicle from './../../components/LoginVehicle/LoginVehicle'
import axios from 'axios';


const Splash = ({ navigation }) => {

  const [unknownUser, setUnknownUser] = React.useState(true)
  const anim = require('./../../../assets/animations/3970-scanning-animation.json')
  const [disabledStatus, setDisabledStatus] = useState(true)
  const [addLoginVehicle, setAddLoginVehicle] = useState(true)

  /**
   * receivedFromLogin => Sert à faire correspondre le front avec le back grâce à Axios, 
   * est utilisé grâce à une props dans 'Login' sous le nom handleClick
   * @param {objet comprenant login+password récupéré de data de Login} user 
   * @param {correspond au checked, et checkbox (de Login), booléen de "se souvenir de moi" } rememberMe 
   */

  const receivedFromLogin = (user, rememberMe) => {
    console.log(`Hey, something came from Login component : ${JSON.stringify(user)}`)
    axios.post(`http://localhost:3000/api/v1/user`, user)
      .then((response) => {
        setAddLoginVehicle(false)
        setUnknownUser(false)
        if (rememberMe) {
          localStorage.setItem("vFleetUser", JSON.stringify(user))
          setAddLoginVehicle(false)
        }
      }).catch(() => {
        setUnknownUser(false)
      })
  }


  const receivedFromImmat = (immat) => {
    console.log(`Hey, something came from Login component : ${JSON.stringify(immat)}`)
    axios.post(`http://localhost:3000/api/v1/vehicle`, immat)
      .then((response) => {
        setDisabledStatus(false)
        setAddLoginVehicle(true)
      }).catch(() => {
        setUnknownUser(false)
      })
  }

  /**
   * 
   */
  useEffect(() => {
    const user = localStorage.getItem("vFleetUser")
    if (user !== null) {
      setDisabledStatus(false)
    }
  }, [])

  /**
   * 
   */
  const loginView = unknownUser ? <Login navigation={navigation} updateCheckButton={receivedFromLogin}></Login> : null
  const addVehicle = !addLoginVehicle ? <LoginVehicle navigation={navigation} updateCheckButtonImmat={receivedFromImmat}></LoginVehicle> : null

  const addUnknownUser = unknownUser ? null :
    <Text style={styles.errorMsg}> Veuillez entrer un identifiant valide. </Text>

  return (
    <>
      <Header titleText="vFleetCheck" navigation={navigation} />
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {addUnknownUser}
        </View>
        {/*  <LottieView
              style={styles.lottieView}
              source={anim}
              loop={true}
              autoPlay={true}
            /> */}
      </View>
      {loginView}
      {addVehicle}
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