import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Text, Appbar, TextInput, IconButton, Colors, Paragraph, Button, Headline, Subheading, List  } from 'react-native-paper'


import { colors } from '../../theme/theme'
import Header from './../../components/header/Header'
import { Rating, AirbnbRating, Slider, Icon } from 'react-native-elements';
import RNSpeedometer from 'react-native-speedometer'



const CheckList = ({ navigation }) => {


  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  const [indice, setIndice] = useState(0)
 
  const [items, setItems] = useState([])
  const [item, setItem] = useState()
  const [buttonDisabledState, setButtonDisabledState] = useState(item.validator != "" ? true : false)
  const [value, setValue] = useState(item.value)
  const [previous, setPrevious] = useState(item.previous)
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');
  const title = 'points de contrôles ' + (indice + 1) + "/" + items.length
  const [meterValue, setMeterValue] = useState(20)
  
  useEffect(() => {
    if (indice > items.length - 1) {
      alert("Donnés validées!!")
    }
    console.log("item courant" + JSON.stringify(item))
    console.log(indice)

  })
  const ratingCompleted = (rating) => {
    const currentItem = items[indice]
    currentItem.value = rating
    items[indice] = currentItem
  }


  //methode qui accede a l item suivant
  const handleClick = () => {
    console.log("je suis la", [indice])
    const itemCourant = item
    itemCourant.value = value
    items[indice] = itemCourant
    setItems(items)
    console.log(JSON.stringify(items))
    const newIndice = (indice + 1)
    if (newIndice < items.length) {
      setIndice(newIndice)
      setItem(items[newIndice])
    }
    if (newIndice >= items.length) {
      navigation.navigate('Recap', { recap: items })

    }

    //active button fuel
    const numberGranted = (value) => {
      if (value != "") {
        if (value >= 0 && value <= 100) {
          setButtonDisabledState(false)
        }
        else {
          setButtonDisabledState(true)
        }
      }

      setMeterValue(value)
      console.log("toto", value)
      setValue(value)

    }

    const numberGranted2 = (value) => {
      console.log("fuck", value)
      if (value != "") {
        if (value >= 0 && value <= 5) {
          setButtonDisabledState(false)
        }
        else {
          setButtonDisabledState(true)
        }
      }

      setMeterValue(value)
      setPrevious(value)
      console.log("toto", value)
      setValue(value)

    }

    //active button kilometre
    const handleChange = (text) => {
      if (item.validator != "") {
        if (value > item.previous) {
          setButtonDisabledState(false)
        }
        else {
          setButtonDisabledState(true)
        }
      }
      setValue(text)
      console.log("check", text)
    }

    const ratingCompleted = (rating) => {
      setValue(rating)
      console.log("bitch", rating)




    }

    const controle = () => {
      switch (item.uiType.uiType) {
        //nbr de kilometre
        case "textInput":
          return <TextInput
            keyboardType={'numeric'}
            placeholder={item.label}
            value={value}
            onChangeText={(text) => handleChange(text)}
          />
        //STARRATING
        case "starRating":
          return <Rating showRating fractions={1}
            startingValue={0}
            onFinishRating={ratingCompleted} />




        case "progressBar":
          return <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.containerss}>
              <RNSpeedometer
                value={meterValue}
                //value for Speedometer
                size={200}
                //Size of Speedometer
                minValue={0}
                //Min value for Speedometer
                maxValue={100}
                //Max value for Speedometer
                allowedDecimals={0}
                //Decimals value allowed or not
                labels={[
                  {
                    name: 'E',
                    labelColor: '#ff2900',
                    activeBarColor: '#ff2900',
                  },
                  {
                    name: '1/2',
                    labelColor: '#f4ab44',
                    activeBarColor: '#f4ab44',
                  },
                  {
                    name: 'F',
                    labelColor: '#00ff6b',
                    activeBarColor: '#00ff6b',
                  },
                ]}
              //Labels for the different steps of Speedometer
              />
              <View style={{ marginTop: 70, padding: 20 }}>
                <Text style={{ fontSize: 20 }}>
                  Veuillez entrez le niveau de carburant{' '}
              de 0 à 100
            </Text>
                <TextInput
                  placeholder={item.hinting}
                  style={styles.textInputs}
                  keyboardType={'numeric'}
                  value={value}
                  maxLength="3"
                  onChangeText={(value) => numberGranted(value)}
                />

              </View>
            </View>
          </SafeAreaView>




      }
    }

    const handleBack = () => {
      console.log("je suis la", [indice])
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


      }
      if (indice < 1) {

        navigation.navigate('Splash')

      }


    }


    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
      fetch("http://127.0.0.1:3000/api/v1/items")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(JSON.stringify(result))
            setIsLoaded(true);
            setItems(result);
          },
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
      <>

        <Header handleBack={handleBack} titleText="Points de contrôles" navigation={navigation} />
        <View style={styles.checkPoint}>
          <Appbar.Header style={styles.checkPoint} >
            <Appbar.Content title={title} />
          </Appbar.Header>
        </View>
        <View style={styles.Headline}>
          <Headline>{item.label}</Headline>
        </View>
        <View>
          <Subheading>Valeur précédente :{item.previous} </Subheading>
        </View>
        <View>
          {controle()}
        </View>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              <IconButton
                disabled={buttonDisabledState}
                icon="check-underline-circle"
                color={Colors.grey300}
                size={100}
                onPress={() => handleClick()}
              /></Text>

          </View>
        </View>
        <View style={styles.para}>

          <Paragraph><List.Icon color={Colors.dark} icon="alert" /> {item.hinting}</Paragraph>

        </View>
      </>
    )

  }

    }
  


 





 

  /**
   * Update Item value for the current Rating Item
   * @param {*} rating 
   */
 
    

  const styles = StyleSheet.create({
    containerss: {
      flex: 1,
      alignItems: 'center',
    },
    textInputs: {
      height: 25,
      fontSize: 16,
      marginTop: 30,
      borderBottomWidth: 0.3,
      borderBottomColor: 'black',
    },
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
      padding: 8
    },

    containers: {
      flex: 1,
      justifyContent: 'space-evenly',
      padding: 10,
    }

  })
}
export default CheckList
