import React, { useState, useEffect } from 'react'
import {  View, TouchableOpacity } from 'react-native';
import { Text, FAB, Button, TextInput, IconButton, Colors } from 'react-native-paper'
import { CheckBox } from 'react-native-elements'
import styles, { colors } from './../../theme/theme'

const LoginVehicle = ({ updateCheckButtonImmat }) => {

    const [immatriculation, setImmatriculation] = React.useState('')
    const [disabled, setDisabled] = React.useState(true)
    const [isValidImmatriculation, setIsValidImmatriculation] = React.useState(false)
    const [data, setData] = React.useState({
      immatriculation:''
    })

   /**
   * handleClick => Bouton valider, correspond à la méthode ReceivedFromLogin passé en props, dans Splash
   */
  const handleClick = () => {
    updateCheckButtonImmat(data)
    // console.log("toto",{user.company})
  }
  
  /**
   * handleLogin sert à récupérer ce qui a été tapé dans identifiant et à le mettre dans le tableau de data
   * + messages lorsqu'il n'y a pas assez de caractères
   * @param {texte tapé dans le login} text 
   */

  const handleLogin = (text) => {
    setImmatriculation(text)
    setData(data => ({...data, immatriculation:text}))

    if(text.trim().length === 7){
      setIsValidImmatriculation(true)
    }
    else{
      setIsValidImmatriculation(false)
    }
  }

   /**
  * NEED MORE EXPLICATIONS
  */
 useEffect(()=> {
    if (isValidImmatriculation) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    console.log(JSON.stringify(data))
  })
  
  /**
   * Ternaires qui ajoutent des messages d'erreurs dépendants des methodes handleLogin et handlePassword
   */
  const validImmat = isValidImmatriculation ? null:
  <Text style={styles.errorMsg}>L'immatriculation doit contenir 7 caractères.</Text>


  return (
    <View style={styles.immatInput}>
        <TextInput
          style={styles.idMdp}
          name="immatriculation"
          label="Immatriculation du véhicule"
          value={immatriculation}
          onChangeText={text => handleLogin(text)}
          type='flat'
        />

        {validImmat}

          <FAB
            disabled={disabled}
            style={styles.validButton}
            icon='check'
            label='Valider'
            onPress={() => handleClick()}        
          />
    </View>
  );
};

export default LoginVehicle;
