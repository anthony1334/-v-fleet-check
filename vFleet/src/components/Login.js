import React, { useState, useEffect } from 'react'
import {  View } from 'react-native';
import { Text, FAB, Button, TextInput, IconButton, Colors, Checkbox } from 'react-native-paper'
import styles, { colors } from '../theme/theme'



const Login = ({ updateCheckButton }) => {

 
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)
  const [isValidUsername, setIsValidUsername] = React.useState(true)
  const [isValidPassword, setIsValidPassword] = React.useState(true)
  const [checked, setChecked] = React.useState(false);

  const [data, setData] = React.useState({
    username:'',
    password:'',
  });

  // BOUTON VALIDER
  const handleClick = (text) => {
    updateCheckButton(data)
  }

  const handleChange = (text) => {
    console.log(text)
  }
  /////////// Gestion de l'identifiant 
  const handleLogin = (text) => {
    setUsername(text)
    setData(data => ({...data, username:text}))

    if (data.username!='' && data.password !='') {
      setDisabled(false)
    } 
    if(text.trim().length <= 4){
      console.log("il faut minimum 4 caracteres.")
      setIsValidUsername(false)
      setDisabled(false)
    }
    if(text.trim().length >= 4){
      setIsValidUsername(true)
    }
    else {
      setDisabled(true)
    }
  }
  //////////// Gestion du mot de passe

  const handlePassword = (text) => {
    setPassword(text)
    setData(data => ({...data, password:text}))

    if (data.username!='' && data.password !='') {
      setDisabled(false)
    }
    if(text.trim().length <= 8){
      setIsValidPassword(false)
      setDisabled(false)
    } 
    if(text.trim().length >= 8){
      setIsValidPassword(true)
      setDisabled(true)
    } 
    else {
      setDisabled(true)
    }
  }

  useEffect((text)=> {
    if (data.username!='' && data.password !='') {
      setDisabled(false)
    }

  })
  
  const InutileMaisIneffacable = (text)=>{
    if (text.trim().length>= 4) {
      setIsValidUsername({ isValidUsername: true
      });
    } else {
      setIsValidUsername ({ isValidUsername : false
      });
    };
    
  }

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

        <Checkbox
          style={styles.remember}
          title='Se souvenir de moi'
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {setChecked(!checked);}
          }
        />
        <Text
          style={styles.textRemember}
          >Se souvenir de moi
        </Text>
        

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

