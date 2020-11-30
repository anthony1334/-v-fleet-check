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

  const receivedFromLogin = (item, rememberMe) => {
    /// Appeler une route sur le backend en lui passant le item
    /// dans la partie créer une route type api/v1/login
    fetch(
      'http://localhost:3000/api/v1/login', 
      {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: item
      }
    ).then((result)=> result.json())
    .then((data)=>{
      setDisabledStatus(false)
      if(rememberMe){
        localStorage.setItem("vFleetUser",JSON.stringify(item))
      }
    })

    const getUsers = (tableUsers) => {
      return new Promise(
          (resolve, reject) => {
              connect.query(
                  `SELECT * FROM ${tableUsers};`,
                  (err, result) => {
                     // console.log("yy",tableName)
                      if (err) reject(err);
                      resolve(formatJson(result));
                  }
              );
          }
      );
  }

  const getUserFromDatabase = () => {
    return getUsers("user");
}
    /// dans splash js faire un fetch (regarde comment fonctionne cette fonction de js)
    // coté backend faire un select afin de voir si qq1 existe avec login mdp 
    // si ça existe statuS 200 (setdisabled...) sinon 404 "dsl pas de login mdp correspondant"
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