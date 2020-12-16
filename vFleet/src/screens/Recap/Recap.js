import React from 'react'
import { View, Button } from 'react-native'

import { Text, FAB, Paragraph, Title } from 'react-native-paper'
import styles from '../../theme/theme'
import Header from '../../components/header/Header'
import CheckList from '../CheckList/CheckList'
import axios from 'axios'
const Environment=require('./../../../environment.js')


const Recap = ({ navigation }) => {

  const items = navigation.getParam('recap')

  const itemFromChecklist = items.map((item) => {
    return <Paragraph key={item.id}>{item.title}:{item.value}{item.validator}</Paragraph>
  })

  console.log(`Hey, something came from Login component : ${JSON.stringify(items)}`)
  axios.post(`${Environment.API}items`, { items })
    .then((response) => {
      setItems(items)
    }).catch(() => {
      console.log("désolé je ne vous connais pas")

    })

  const handleBack = () => {
    const itemCourant = item
    itemCourant.value = value
    items[indice] = itemCourant
    setItems(items)

    console.log(JSON.stringify(items))

    
    const handleBack = () => {
        console.log("je suis la",[indice])
        const itemCourant = item
        itemCourant.value = value
        items[indice] = itemCourant
        setItems(items)
      
        console.log(JSON.stringify(items))
        const newIndice = (indice - 1)
        if (newIndice < items.length) {
          setIndice(newIndice)
          setItem(items[newIndice])
          setValue(item.value)
          setPrevious(value)
          
        }
          if(indice<1){
            
                  navigation.navigate('Splash')
      
         } 
          
        
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
            onPress={() => navigation.navigate('Splash')/* , console.log("atchoum!") */}
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
}
export default Recap

