import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View, SafeAreaView
} from 'react-native'
import {
  Text,
  Appbar,
  TextInput,
  IconButton,
  Colors,
  Paragraph,
  Headline,
  Subheading,
  List
} from 'react-native-paper'
import Header from './../../components/header/Header'
import {
  Rating
} from 'react-native-elements';
import RNSpeedometer from 'react-native-speedometer'
const Environment = require('./../../../environment.js')

/**
 * main function
 * @param {*} navigation 
 */
const CheckList = ({ navigation }) => {
  /**
  * definition des variables d'états
  */

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [indice, setIndice] = useState(0)
  const [items, setItems] = useState([])
  const [item, setItem] = useState({})
  const [buttonDisabledState, setButtonDisabledState] = useState(true)
  const [value, setValue] = useState("")
  const [previous, setPrevious] = useState("")
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');
  const title = 'points de contrôles ' + (indice + 1) + "/" + items.length
  const [meterValue, setMeterValue] = useState(20)


  /** 
   * mise a jour de la valeur saisie dans le starRating
  */
  const ratingCompleted = (rating) => {
    const currentItem = items[indice]
    currentItem.value = rating
    items[indice] = currentItem
    setValue(rating)
  }


  //methode qui accede a l item suivant
  const handleClick = () => {
    const itemCourant = item
    itemCourant.value = value
    items[indice] = itemCourant
    setItems(items)
    

    const newIndice = (indice + 1)
    if (newIndice < items.length) {
      setIndice(newIndice)
      setItem(items[newIndice])
      setValue(items[newIndice].value)
    }
    if (newIndice >= items.length) {
      navigation.navigate('Recap', { recap: items })
    }
  }

   /**
   * permet de revenir a l item precedent
   */
  const handleBack = () => {
    console.log(JSON.stringify(items))
    const newIndice = (indice - 1)
    if (newIndice < items.length) {
      setIndice(newIndice)
      setItem(items[newIndice])
      setValue(items[newIndice].value)
    }
    //revient a splash le cas echeant
    //@todo    if (indice < 1) stay indice 1
    if (indice < 1) {
      navigation.navigate('Splash')
    }
  }

  //active button fuel
  const numberGranted = (value) => {

    setMeterValue(value)
    setValue(value)
  }

  //active button kilometre + mise a jour de la valeur saisie
  const handleChange = (text) => {


    setValue(text)
  }

  /**
   * definit les differents formControl
   */
  const controle = () => {
    switch (item.controle) {
      //nbr de kilometre
      case "textInput":
        return <TextInput
          keyboardType={'numeric'}
          placeholder={item.title}
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

 
  useEffect(() => {
    switch (item.controle) {
      case "textInput":
        const valueAsnumber = +value
        if (valueAsnumber >= +item.previous ) {
          setButtonDisabledState(false)
        }
        else {
          setButtonDisabledState(true)
        }
        break
      case "progressBar":
        if (value != "") {
          if (value >= 0 && value <= 100) {
            setButtonDisabledState(false)
          }
          else {
            setButtonDisabledState(true)
          }
        }
        break 
        default: setButtonDisabledState(false)

    }


  })
  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    fetch(`${Environment.API}items`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setItem(result[0]);
          setPrevious(result[0].previous);
          setValue("")
          setButtonDisabledState(item.validator != "" ? true : false)
        },
        // @Todo: il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  /**
   * affiche un message d erreur en cas de probleme de recuperation des items depuis l API
   * 
   */
  if (error) {
    return <View><Text>Erreur : {error.message}</Text></View>;
  } else if (!isLoaded) {
    return <View><Text>Chargement...</Text></View>;
  } else {
    //render
    return (
      <>
        <Header handleBack={handleBack} titleText="Points de contrôles" navigation={navigation} />
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
 * css
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


export default CheckList
