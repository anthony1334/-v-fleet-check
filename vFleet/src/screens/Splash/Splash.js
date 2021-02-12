import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, FAB, Button } from 'react-native-paper'
import styles, { colors } from './../../theme/theme'
import LottieView from 'lottie-react-native'
import Header from './../../components/header/Header'
import Login from './../../components/login/Login'
import LoginVehicle from './../../components/loginVehicle/LoginVehicle'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
const Environment = require('./../../../environment.js')

const Splash = ({ navigation }) => {

  /*  let immat = {} */

  const anim = require('./../../../assets/animations/3970-scanning-animation.json')
  const [unknownUser, setUnknownUser] = React.useState(true)
  const [disabledStatus, setDisabledStatus] = useState(true)
  const [addLoginVehicle, setAddLoginVehicle] = useState(true)
  const [isUserLoad, setIsUserLoad] = useState(false)
  const [isImmatLoad, setImmatLoad] = useState(false)
  const [welcomeMessage, setWelcomeMessage] = useState(false)
  const [doLogOut, setDoLogOut] = useState(false)
  const [user, setUser] = useState({})
  const [immat, setImmat] = useState({})

  const processLogOut = () => {
    AsyncStorage.removeItem("vFleetUser")
    setDoLogOut(false)
    setImmatLoad(false)
    setUnknownUser(true)
    setIsUserLoad(false)
    setWelcomeMessage(false)
    setAddLoginVehicle(true)
    setUser({})
  }

  /**
   * receivedFromLogin => Sert à faire correspondre le front avec le back grâce à Axios, 
   * est utilisé grâce à une props dans 'Login' sous le nom handleClick
   * @param {objet comprenant username+password récupéré de data de Login} user 
   * @param {correspond au checked, et checkbox (de Login), booléen de "se souvenir de moi" } rememberMe 
   */

  const receivedFromLogin = (user, rememberMe) => {
    axios.get(`${Environment.API}user/${user.username}/${user.password}`)
      // Si utilisateur connu
      .then((response) => {
        setAddLoginVehicle(false)
        setUnknownUser(false)
        setIsUserLoad(false)
        setUser(response)
        setDoLogOut(true)

        // si utilisateur connu + case cochée se souvenir de moi
        if (rememberMe) {
          AsyncStorage.setItem("vFleetUser", JSON.stringify(user))
        }
        // erreur = donc utilisateur inconnu
      }).catch((error) => {
        if (user = unknownUser) {
          setIsUserLoad(true)
        }
      })
  }

  const receivedFromImmat = (immat) => {
    immat = immat.immatriculation.replace(' ', '').toUpperCase()
    
    axios.get(`${Environment.API}vehicle/${immat}`)
      .then((response) => {
        immat = response.data
        setDisabledStatus(false)
        setAddLoginVehicle(true)
        setImmatLoad(false)
        setWelcomeMessage(true)
        setImmat(response.data)
      }).catch(() => {
        if (immat = !isImmatLoad) {
          setImmatLoad(true)
        }
      })
  }

  /**
   * 
   */

  useEffect(() => {
    async function fetchUser() {
      const user = await AsyncStorage.getItem("vFleetUser")
      if (user !== null) {
        axios.get(`${Environment.API}user/${user.username}/${user.password}`)
          // Si utilisateur connu
          .then((response) => {
            setAddLoginVehicle(false)
            setUnknownUser(false)
            setIsUserLoad(false)
            setUser(response)
            setDoLogOut(true)
          })
          .catch((error) => {
            if (user = unknownUser) {
              setIsUserLoad(true)
            }
          })
      }
    }
    fetchUser()
  }, [])

  /**
   * Si utilisateur inconnu, alors on passe dans la méthode receivedFromLogin
   */
  const loginView = unknownUser ? <Login navigation={navigation} updateCheckButton={receivedFromLogin}></Login> : null
  /**
 * Si ça passe pas à l'input immat, alors on passe dans la methode receivedFromLogin
 */
  const addVehicle = !addLoginVehicle ? <LoginVehicle navigation={navigation} updateCheckButtonImmat={receivedFromImmat}></LoginVehicle> : null
  /**
  * Si utilisateur inconnu, rien, sinon message erreur s'affiche
  */
  const loginErrorMessage = isUserLoad ? <Text style={styles.errorMsg}> Veuillez entrer un identifiant valide. </Text> : null
  const immatErrorMessage = isImmatLoad ? <Text style={styles.errorMsg}> Veuillez entrer une immatriculation connue. </Text> : null

  const welcomeMess = welcomeMessage ?
    <View style={styles.welcomeMsg}>
      <Text > Bonjour <Text style={styles.boldText}>{user.data.userLog}</Text> </Text>
      <Text > Cliquez sur le bouton ci-dessous pour contrôler le véhicule <Text style={styles.boldText}>{(immat.matriculation)}</Text> </Text>
    </View>
    : null

  const logOut = doLogOut ?
    <FAB
       style={styles.fabvalid}
      small
      icon='account-remove'
      label="Deconnexion"
      onPress={() => processLogOut()}
    />
  : null


  return (
    <>
      <Header titleText="vFleetCheck" navigation={navigation} />
      
      <View style={styles.container}>
        <View>
          {loginErrorMessage}
          {immatErrorMessage}
        </View>
        <LottieView
              style={styles.lottieView}
              source={anim}
              loop={true}
              autoPlay={true}
        />

      </View>
      
      {loginView}
      
      {addVehicle}
      
      {welcomeMess}

      <View style={styles.bottomLocked}>
        {logOut}

        <FAB
          style={styles.fabvalid}
          small
          icon='check'
          label='Accéder à la checklist'
          disabled={disabledStatus}
          onPress={() => navigation.navigate('CheckList', { immat: immat })}

        />
      </View>
    </>
  )
}

export default Splash
