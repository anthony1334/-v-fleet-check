import React from 'react'
import { View } from 'react-native'
import { Text, FAB } from 'react-native-paper'

import styles from './../../theme/theme'

import LottieView from 'lottie-react-native'

import Header from './../../components/header/Header'

const Splash = ({ navigation }) => {
  const anim = require('./../../../assets/animations/3970-scanning-animation.json')

    return (
        <>
          <Header titleText="vFleetCheck" navigation={navigation} />
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



  export default Splash