import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Appbar, Headline, Subheading, TextInput, IconButton, Colors, Paragraph, List } from 'react-native-paper'
import { colors } from '../../theme/theme'

import Header from './../../components/header/Header'





const CheckList = ({ navigation }) => {
  const [indice, setIndice] = useState(0)
  const [items, setItems] = useState([
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

    {
      "title": "Jauge huile",
      "detail": "Blah blah blah",
      "previous": 0.25,
      "done": false
    }
  ])

  const [item, setItem] = useState(items[indice])



  const [text, setText] = React.useState('');
  const title = 'points de contrôles ' +(indice+1)+ "/" + items.length


  
  const handleClick = () => {
    const newIndice = new Number(indice + 1)
    if(newIndice> items.length){
      alert("Donnés validées!!")
    }
    else{
    setIndice(newIndice)
    setItem(items[newIndice])
    console.log(JSON.stringify(item))
  }
  }


  return (
    <>
      <Header titleText="Points de contrôles" navigation={navigation} />
      <View style={styles.checkPoint}>
        <Appbar.Header style={styles.checkPoint} >
          <Appbar.Content title={title} />
        </Appbar.Header>
      </View>
      <View style={styles.Headline}>
        <Headline>{item.title}</Headline>
      </View>
      <View>
        <Subheading>Valeur précédente :{item.previous} </Subheading>
      </View>
      <View>
        <TextInput
          mode
          keyboardType='numeric'
          label="Nouvelle valeur: 250"
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>


      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> <IconButton
            icon="check-underline-circle"
            color={Colors.grey300}
            size={100}
            onPress={() =>handleClick()}
          /></Text>

        </View>
      </View>
      <View style={styles.para}>

        <Paragraph><List.Icon color={Colors.dark} icon="alert" /> Long body text - Minantia non modo formaeque inmeis acervo formaeque gravitate erat indigestaquehabentia fixo mutatas aliud orbis retinebat qui nonalta
</Paragraph>
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
  Headline: {
    marginTop: 30

  },
  checkPoint: {


    marginTop: 30,
    backgroundColor: '#fff'


  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#ebae34",
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    margin: 40,
    fontWeight: "bold",
    padding: 80
  }
})

export default CheckList