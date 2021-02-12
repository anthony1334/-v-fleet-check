import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { FAB, Paragraph, Title, Snackbar } from 'react-native-paper'
import styles, {colors} from '../../theme/theme'
import Header from '../../components/header/Header'

import axios from 'axios'
const Environment = require('./../../../environment.js')



const Recap = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const items = navigation.getParam('recap')
  const immat = navigation.getParam('immat')

  const itemFromChecklist = items.map((item) => {
    return <Paragraph 
      key={item.id} 
      style={styles.defaultFontColor}>
        {item.title} : {item.value}
      </Paragraph>
  })

  const validate = () => {
    axios.post(`${Environment.API}items`, { items, immat })
      .then((response) => {
         setIsVisible(true)
      }).catch(() => {
        console.log("une erreur est survenue")

      })
  }

  const onDismiss = () => {
    setIsVisible(false)
    setDismissed(true)
  }

  const buttons = isVisible ? null : <>
  <View>
      <FAB
        style={styles.fabvalid}
        small
        icon='check'
        label='Valider'
        hidden={isVisible}
        onPress={() => validate()}
      />
  </View>
  <View>
    <FAB
      style={styles.fabvalid}
      small
      icon='page-previous'
      label='Modifier'
      onPress={() => navigation.navigate('CheckList')}
      hidden={isVisible}
    />
  </View>
</>

  useEffect(() => {
    if (dismissed) {
      navigation.navigate('Splash')
    }
  })

  return (
    <>
      <Header titleText="vFleetCheck" navigation={navigation} />
      
      <View style={styles.container}>
        <Snackbar
          visible={isVisible}
          onDismiss={() => onDismiss()}
          duration={3000}
        >
          Les points de contrôles ont bien été mis à jour.... Merci.
        </Snackbar>

        <View>
          <Title style={styles.defaultFontColor}>Vous avez saisi les valeurs suivantes :</Title>
        </View>

        <View style={customStyles.list}>
          {itemFromChecklist}
        </View>

        { buttons }
    </View>
    </>
  )
}

const customStyles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 20
  }
})

export default Recap

