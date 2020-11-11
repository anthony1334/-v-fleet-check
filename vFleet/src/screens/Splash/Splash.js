import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, FAB } from 'react-native-paper'

import Header from './../../components/header/Header'

const Splash = ({ navigation }) => {
    return (
        <>
          <Header titleText='vFleetCheck' />
          <View style={styles.container}>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>vFleetCheck</Text>
              </View>

              <FAB
                style={styles.fab}
                small
                icon='check'
                label='Accéder à la checklist'
                onPress={() => navigation.navigate('CheckList')}
              />
          </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    title: {
      fontSize: 20
    },
    fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 10
    }
  })

  export default Splash