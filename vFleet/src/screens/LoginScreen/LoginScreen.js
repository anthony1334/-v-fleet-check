
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper'
import Header from './../../components/header/Header'

const LoginScreen = ({ navigation }) => {
  const [item, setItem] = useState("")
  return (
    <>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LoginScreen</Text>
        <View>
          <TextInput
            placeholder="Veuillez entrez votre id "
            value={item.value}
            onChangeText={() => handleChange()}
          />
        </View>
        <View>
          <TextInput
            placeholder="Veuillez entrez votre mdp"
            value={item.value}
            onChangeText={() => handleChange()}
          />
        </View>

      </View>
    </>

  );
}

export default LoginScreen;