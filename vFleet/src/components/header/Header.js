import React from 'react'
import { View } from 'react-native'
import { Appbar, Title } from 'react-native-paper'

import styles from './../../theme/theme'

const Header = ({ titleText }) => {
    return (
      <Appbar.Header style={styles.headerContainer}>
        <View style={styles.headerContainer}>
          <Title style={styles.title}>{titleText}</Title>
        </View>
      </Appbar.Header>
    )
  }
  
  export default Header
  