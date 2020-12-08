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
  });

  /**
   * HandleClick => Bouton valider, correspond à la méthode ReceivedFromLogin, dans Splash
   */
  const handleClick = () => {
    updateCheckButton(data, checked)
  }

  /**
   * handleLogin sert à récupérer ce qui a été tapé dans identifiant et à le mettre dans le tableau de data
   * + messages lorsqu'il n'y a pas assez de caractères
   * @param {texte tapé dans le login} text 
   */

  const handleLogin = (text) => {
    setUsername(text)
    setData(data => ({...data, username:text}))

    if(text.trim().length <= 4){
      setIsValidUsername(false)
    }
    else{
      setIsValidUsername(true)
    }
  }
  
   /**
   * handlePassword sert à récupérer ce qui a été tapé dans identifiant et à le mettre dans le tableau de data
   * + messages lorsqu'il n'y a pas assez de caractères
   * @param {texte tapé dans le login} text 
   */

  const handlePassword = (text) => {
    setPassword(text)
    setData(data => ({...data, password:text}))

    if(text.trim().length <= 8){
      setIsValidPassword(false)
    } 
    else {
      setIsValidPassword(true)
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
    console.log(JSON.stringify(data))
  })
    
  /**
   * Ternaires qui ajoutent des messages d'erreurs dépendants des methodes handleLogin et handlePassword
   */
  const validUsername = isValidUsername ? null:
  <Text style={styles.errorMsg}>Le nom d'utilisateur doit contenir minimum 4 caractères.</Text>
  
  const validPassword = isValidPassword ? null :  
  <Text style={styles.errorMsg}>Le mot de passe doit contenir minimum 8 caractères.</Text>


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={styles.idMdp}
          name="username"
          label="Votre identifiant"
          value={username}
          onChangeText={text => handleLogin(text)}
          type='flat'
        />

        {validUsername}

        <TextInput
          style={styles.idMdp}
          secureTextEntry
          name="password"
          label="Votre mot de passe"
          value={password}
          onChangeText={text => handlePassword(text)}
          type='flat'
        />

        {validPassword}

        <CheckBox
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


