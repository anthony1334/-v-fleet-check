import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, FAB, Button } from 'react-native-paper'
import styles, { colors } from './../../theme/theme'
import LottieView from 'lottie-react-native'
import Header from './../../components/header/Header'
import Login from './../../components/login/Login'
import LoginVehicle from './../../components/loginVehicle/LoginVehicle'
import axios from 'axios';
import AsyncStorage from '@react-native/community/async-storage'


const Splash = ({ navigation }) => {

  const anim = require('./../../../assets/animations/3970-scanning-animation.json')
  const [unknownUser, setUnknownUser] = React.useState(true)
  const [disabledStatus, setDisabledStatus] = useState(true)
  const [addLoginVehicle, setAddLoginVehicle] = useState(true)
  const [isUserLoad, setIsUserLoad] = useState(false)
  const [isImmatLoad, setImmatLoad] = useState(false)

  /**
   * receivedFromLogin => Sert à faire correspondre le front avec le back grâce à Axios, 
   * est utilisé grâce à une props dans 'Login' sous le nom handleClick
   * @param {objet comprenant login+password récupéré de data de Login} user 
   * @param {correspond au checked, et checkbox (de Login), booléen de "se souvenir de moi" } rememberMe 
   */

  const receivedFromLogin = (user, rememberMe) => {
    axios.post(`http://localhost:3000/api/v1/user`, user)
      // Si utilisateur connu
      .then(async (response) => {
        setAddLoginVehicle(false)
        setUnknownUser(false)
        setIsUserLoad(false)
        // si utilisateur connu + case cochée se souvenir de moi
        if (rememberMe) {
          await AsyncStorage.setItem("vFleetUser", JSON.stringify(user))
          // setAddLoginVehicle(false)
        }
        // erreur = donc utilisateur inconnu
      }).catch(() => {
        if (user = unknownUser) {
          setIsUserLoad(true)
        }

        // setAddLoginVehicle(false)
      })
  }

  const receivedFromImmat = (immat) => {
    axios.post(`http://localhost:3000/api/v1/vehicle`, immat)
      .then((response) => {
        setDisabledStatus(false)
        setAddLoginVehicle(true)
        setImmatLoad(false)
      }).catch(() => {
        if (immat = !isImmatLoad) {
          console.log("coucou234")
          setImmatLoad(true)
        }
      })
  }

  /**
   * 
   */
  useEffect(async () => {
    const user = await AsyncStorage.getItem("vFleetUser")
    if (user !== null) {
      setAddLoginVehicle(false)
      setUnknownUser(false)
      setIsUserLoad(false)
    }
  })
}
