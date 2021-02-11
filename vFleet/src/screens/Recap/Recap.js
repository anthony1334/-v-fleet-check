import React from 'react'
import { View, Button } from 'react-native'
import { Text, FAB, Paragraph, Title } from 'react-native-paper'
import styles from '../../theme/theme'
import Header from '../../components/header/Header'
import CheckList from '../CheckList/CheckList'
import axios from 'axios'
const Environment = require('./../../../environment.js')



const Recap = ({ navigation }) => {
  const items = navigation.getParam('recap')
  const immat = navigation.getParam('immat')

  const itemFromChecklist = items.map((item) => {
    return <Paragraph key={item.id}>{item.title}:{item.value}{item.validator}</Paragraph>
  })
  const validate = () => {
  
    axios.post(`${Environment.API}items`, { items, immat })
      .then((response) => {

        setItems(items)
         navigation.navigate('Splash')
      }).catch(() => {
        console.log("une erreur est survenue")

      })
  }


  return (
    <>
      <Header titleText="vFleetCheck" navigation={navigation} />
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        </View>
        <View>
          <Title>Vous avez saisi les valeurs suivantes :</Title>
        </View>
        <View >
          {itemFromChecklist}
        </View>
        <View>
          <FAB
            style={styles.fab}
            small
            icon='check'
            label='Valider'
            onPress={() => validate}

          />
        </View>


      </View>
      <FAB
        style={styles.fab}
        small
        icon='check'
        label='Modifier'
        onPress={() => navigation.navigate('CheckList')}
      />
    </>
  )
}

export default Recap

