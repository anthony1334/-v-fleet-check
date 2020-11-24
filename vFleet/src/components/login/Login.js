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

  // BOUTON VALIDER
  const handleClick = () => {
    updateCheckButton(data, checked)
  }
  ////// AFFICHER DONNEES
  const handleChange = (text) => {
    console.log(text)
  }
  /////////// Gestion de l'identifiant 
  const handleLogin = (text) => {
    console.log('handleLogin')
    setUsername(text)
    setData(data => ({...data, username:text}))

    if(text.trim().length <= 4){
      setIsValidUsername(false)
    }
    else{
      setIsValidUsername(true)
    }

  }
  //////////// Gestion du mot de passe

  const handlePassword = (text) => {
    console.log('handlePassword')

    setPassword(text)
    setData(data => ({...data, password:text}))

    if(text.trim().length <= 8){
      setIsValidPassword(false)
    } 
    else {
      setIsValidPassword(true)
    } 
  }
 //////////: BONNE QUESTION
  useEffect(()=> {
    if (isValidUsername && isValidPassword) {
      console.log('handlePassword ok')
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    console.log(JSON.stringify(data))
  })
  
  const InutileMaisIneffacable = (text)=>{
    if (text.trim().length>= 4) {
      setIsValidUsername({ isValidUsername: true
      });
    } else {
      setIsValidUsername ({ isValidUsername : false
      });
    };
  };

  //////// TERNAIRES MESSAGES D ERREURS
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
            label='Valider'
            onPress={() => handleClick()}        
          />
    </View>
  );
};

export default Login;

//// 5 ELEMENT
// CHAMP Login
// MDP 
// BOUTON VALIDER QUI DOIT S ActivER 
// UN LIEN MDP OUBLIE
// UN LIEN
