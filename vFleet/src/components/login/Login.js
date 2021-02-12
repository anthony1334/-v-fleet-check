import React, { useState, useEffect } from 'react'
import {  View, TouchableOpacity } from 'react-native';
import { Text, FAB, Button, TextInput, IconButton, Colors } from 'react-native-paper'
import { CheckBox } from 'react-native-elements'
import styles, { colors } from './../../theme/theme'


const Login = ({ updateCheckButton }) => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)
  const [isValidUsername, setIsValidUsername] = React.useState(false)
  const [isValidPassword, setIsValidPassword] = React.useState(false)
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = React.useState({
    username:'',
    password:'',
  })
  const [fieldsTouched, setFieldsTouched] = useState({
    username: false,
    password: false
  })

  /**
   * HandleClick => Bouton valider, correspond à la méthode ReceivedFromLogin, dans Splash
   */
  const handleClick = () => {
    updateCheckButton(data, checked)
  }
 
  
  /////////// Gestion de l'identifiant 
  const handleLogin = (text) => {
    setUsername(text)
    if(text.trim().length === 0){
      setIsValidUsername(false)
      changeFieldTouchState('username', true)
    }
    else{
      setIsValidUsername(true)
      setData(data => ({...data, username:text}))
      changeFieldTouchState('username', false)
    }
  }
  
   /**
   * handlePassword sert à récupérer ce qui a été tapé dans identifiant et à le mettre dans le tableau de data
   * + messages lorsqu'il n'y a pas assez de caractères
   * @param {texte tapé dans le login} text 
   */

  const handlePassword = (text) => {
    setPassword(text)
    if(text.trim().length === 0){
      setIsValidPassword(false)
      changeFieldTouchState('password', true)
    } 
    else {
      setIsValidPassword(true)
      setData(data => ({...data, password:text}))
      changeFieldTouchState('password', false)
    } 
  }


  const changeFieldTouchState = (field, state) => {
    console.log(`Field ${field} was touched`);
    if (field === 'username') {
      setFieldsTouched(fieldsTouched => ({...fieldsTouched, username: state}))
    } else {
      setFieldsTouched(fieldsTouched => ({...fieldsTouched, password: state}))
    }
  }

  /**
  * NEED MORE EXPLICATIONS
  */
  useEffect(()=> {
    if (isValidUsername && isValidPassword) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })
    
  /**
   * Ternaires qui ajoutent des messages d'erreurs dépendants des methodes handleLogin et handlePassword
   */
  const validUsername = () => {
    if (fieldsTouched.username) {
      if (!isValidUsername) {
        return <Text style={styles.errorMsg}>Le nom d'utilisateur ne peut pas être vide</Text>
      }
    }
    return null
  }

  const validPassword = () => {
    if (fieldsTouched.password) {
      if (!isValidPassword) {
        return <Text style={styles.errorMsg}>Le mot de passe ne peut pas être vide</Text>
      }
    }
    return null    
  }
  


  return (
    <View style={styles.loginStyle}>
        <TextInput
          style={styles.idMdp}
          name="username"
          label="Votre identifiant"
          value={username}
          onChangeText={text => handleLogin(text)}
          type='flat'
        />
        {validUsername()}
        
        <TextInput
          style={styles.idMdp}
          secureTextEntry
          name="password"
          label="Votre mot de passe"
          value={password}
          onChangeText={text => handlePassword(text)}
          type='flat'
        />
        {validPassword()}
        
        <CheckBox 
          style={styles.checkRemember}
          center
          title='Se souvenir de moi'
          iconRight
          onPress={() => {setChecked(!checked)}}
          checked={checked}
        />
        <FAB
          disabled={disabled}
          style={styles.fabvalid}
          icon='check'
          label='Identifier mon véhicule'
          onPress={() => handleClick()}        
        />
    </View>
  );
};

export default Login;


