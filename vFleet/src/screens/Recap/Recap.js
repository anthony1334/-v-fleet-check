import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FAB, Paragraph, Title } from 'react-native-paper'
import styles, {colors} from '../../theme/theme'
import Header from '../../components/header/Header'

import axios from 'axios'
const Environment = require('./../../../environment.js')



const Recap = ({ navigation }) => {
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
         navigation.navigate('Splash')
      }).catch(() => {
        console.log("une erreur est survenue")

      })
  }


  return (
    <>
      <Header titleText="vFleetCheck" navigation={navigation} />
      
      <View style={styles.container}>
        <View>
          <Title style={styles.defaultFontColor}>Vous avez saisi les valeurs suivantes :</Title>
        </View>

        <View style={customStyles.list}>
          {itemFromChecklist}
        </View>

        <View>
          <FAB
            style={styles.fabvalid}
            small
            icon='check'
            label='Valider'
            onPress={() => validate()}
          />
        </View>

        <FAB
          style={styles.fabvalid}
          small
          icon='page-previous'
          label='Modifier'
          onPress={() => navigation.navigate('CheckList')}
        />
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

