import React from 'react'
import { View, Button } from 'react-native'

import { Text, FAB,Paragraph  } from 'react-native-paper'
import styles from '../../theme/theme'
import Header from '../../components/header/Header'
import CheckList from '../CheckList/CheckList'


const Recap = ({ navigation }) => {

  const items = navigation.getParam('recap')
  /* const item = navigation.getParam('recap') */
  /* items.array.forEach(element => {
    console.log(item.value)
    
  }); */

  console.log("wtf", items)


  const handleBack = () => {
    console.log("je suis la", [indice])
    const itemCourant = item
    itemCourant.value = value
    items[indice] = itemCourant
    setItems(items)

    console.log(JSON.stringify(items))
<<<<<<< HEAD:vFleet/src/screens/recap.js/Recap.js
    const newIndice = (indice - 1)
    if (newIndice < items.length) {
      setIndice(newIndice)
      setItem(items[newIndice])
      setValue(item.value)
      setPrevious(value)

    }
    if (indice < 1) {

      navigation.navigate('Splash')

    }


  }

=======

    
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
  
>>>>>>> 9a0667f7986e631aa111763705843bbe6e7c6ed9:vFleet/src/screens/Recap/Recap.js

  return (
    <>


      <Header titleText="vFleetCheck" navigation={navigation} />
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



        </View>
        <View>
          <Paragraph>keys={items}</Paragraph>
          
        </View>


        <FAB
          style={styles.fab}
          small
          icon='check'
          label='Valider'
          onPress={() => navigation.navigate('Splash')}
        />
      </View>

    </>
  )
}



export default Recap

