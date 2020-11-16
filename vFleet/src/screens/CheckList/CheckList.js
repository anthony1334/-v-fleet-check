import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Appbar, TextInput, IconButton, Colors, Paragraph, Button } from 'react-native-paper'
import { colors } from '../../theme/theme'

import Header from './../../components/header/Header'




const CheckList = ({ navigation }) => {

  const[indice, setIndice]= useState (0)
  const [items, setItems] = useState(
    [
      {
        "title": "Nb. Kilomètres",
        "detail": "Blah blah blah",
        "previous": 81200,
        "done": false
      },
      {
        "title": "Etat des pneumatiques",
        "detail": "Blah blah blah",
        "previous": 4.5,
        "done": false
      },
      {
        "title": "Jauge carburant",
        "detail": "Blah blah blah",
        "previous": 0.25,
        "done": false
      },
    ]
  )

  const [item, setItem] = useState(items[indice])

  const [text, setText] = React.useState('')

  const title = 'points de contrôles ' +(indice+1)+ "/" + items.length


  useEffect(() => {
    if(indice> items.length-1){
      alert("Donnés validées!!")
    }
    console.log("item courant"+ JSON.stringify(item))
    console.log(indice)
  })

  const handleClick = () => {
    const newIndice = (indice + 1)
    if(newIndice<items.length){
      setIndice(newIndice)
      setItem(items[newIndice])
      console.log(JSON.stringify(item))

    }
  }
 
    return (
      <>
        <Header titleText="CheckList" navigation={navigation} />

        <View style={styles.container}>
          
        <Appbar.Header>
          <Appbar.Content 
            style={styles.title} 
            title={title} 
            subtitle={'XXX 999 XXX'}
            // color={Colors.black} 
            // backgroundColor={colors.orange}
          />
        </Appbar.Header>

        <Text style={styles.title}>Nb. Kilomètres:</Text>
        <Text style={styles.title}>Valeur précédente: {item.previous}</Text>

        <TextInput
          label="Nouvelle valeur"
          keyboardType='numeric'
          value={text}
          onChangeText={text => setText(text)}
          type='flat'
        />

        <IconButton style={styles.valid}
          icon="check-box-outline"
          color={Colors.black}
          size={60}
          onPress={() => handleClick()}
          alignItems= 'center'
          justifyContent= 'center'
 
        />
        <View style={styles.endparagraph}>
        
          <IconButton style={styles.alerticon}
            icon="alert"
            iconLeft
            size={70}
          />
      
          <Paragraph style={styles.alertparagraph}>
            Long body text Long body text Long body text Long body text Long body text
            Long body text Long body text Long body text Long body text Long 
          </Paragraph>
        </View>

      </View>
      </>
    )
}

////////////////////////// STYLESHEET ////////////////////////////

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20,
      
    },

    valid: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      // flex: 1
    },

    endparagraph : {
      borderWidth: 2,
      borderColor: colors.warning,
      backgroundColor: colors.light,
      fontSize: 30,
      margin:25,
      fontWeight: "bold",
      padding:20
    },

    alerticon : {
      color: colors.warning,
      paddingLeft: 0
    },
    alertparagraph : {
      textAlign: "left",
      paddingLeft: 30
    },

    title : {
      // backgroundColor: colors.light,
    }

  })

  ///////////////////////////END STYLESHEET///////////////////////////////

  export default CheckList