import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, FAB } from 'react-native-paper'

import LottieView from 'lottie-react-native'

import Header from './../../components/header/Header'

const Splash = ({ navigation }) => {
  const anim = require('./../../../assets/animations/3970-scanning-animation.json')

    return (
        <>
          <Header titleText='vFleetCheck' />
          <View style={styles.container}>
              <LottieView
                source={anim}
                loop={true}
                autoPlay={true}
              />
              
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