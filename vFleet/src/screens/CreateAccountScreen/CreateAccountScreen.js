import React from 'react';
import { View, Text, Button, Header } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {

  return (
    <>
     
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Il est temps de créer un compte</Text>

        <Button
          title="Create account"
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </View>
    </>
  );
};

export default CreateAccountScreen;