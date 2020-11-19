import React from 'react'
import { View } from 'react-native'
import { Appbar, Title } from 'react-native-paper'
import styles from './../../theme/theme'
import { StackNavigator } from 'react-navigation'



const Header = ({ navigation, titleText,handleBack }) => {
  const backButton = navigation.state.routeName !== 'Splash' ? <Appbar.BackAction
    onPress={() => {
      handleBack()
    }}
  /> : null

  return (
    <Appbar.Header style={styles.headerContainer}>
      {backButton}
      <View style={styles.headerContainer}>
        <Title style={styles.headerContainerTitle}>{titleText}</Title>
      </View>
    </Appbar.Header>
  )
}

export default Header
