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
  FAB,
  Headline,
  Subheading,
  List
} from 'react-native-paper'
import Header from './../../components/header/Header'
import {
  Rating
} from 'react-native-elements';
import RNSpeedometer from 'react-native-speedometer'
import Camera2 from './../../components/camera/Camera2'
import { Button, Overlay } from 'react-native-elements';
import styles, { colors } from './../../theme/theme'
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
  const [photo, setPhoto] = useState({})
  const [buttonDisabledState, setButtonDisabledState] = useState(true)
  const [value, setValue] = useState("")
  const [previous, setPrevious] = useState("")
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');
  const title = 'points de contrôles ' + (indice + 1) + "/" + items.length
  const [meterValue, setMeterValue] = useState(20)
  const immat = navigation.getParam('immat')
  const [cameraOn, setCameraOn] = useState(false)




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
    setItems(items)//stock la valeur courante

    const newIndice = (indice + 1)
    if (newIndice < items.length) {
      setIndice(newIndice)
      setItem(items[newIndice])
      setValue(items[newIndice].value)
    }
    if (newIndice >= items.length) {
      navigation.navigate('Recap', { recap: items, immat: immat })
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
          style={customStyles.textInputs}
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
          <View style={customStyles.containerss}>
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
                style={customStyles.textInputs}
                keyboardType={'numeric'}
                value={value}
                onChangeText={(value) => numberGranted(value)}
              />
            </View>
          </View>
        </SafeAreaView>
    }
  }

  




  const toggleOverlay = () => {
    /*  setVisible(!visible); */
    setCameraOn(!cameraOn)
  };




  /**
   * effet de bord de l activation des boutons pour passer a l item suivant
   */

  useEffect(() => {
    switch (item.controle) {
      case "textInput":
        const valueAsnumber = +value
        if (valueAsnumber >= +item.previous) {
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
        
        <View style={customStyles.checkPoint}>
          <Appbar.Header style={customStyles.checkPoint} >
            <Appbar.Content title={title} />
          </Appbar.Header>
        </View>
        
        <View style={customStyles.Headline}>
          <Headline style={customStyles.Headline}>{item.title}</Headline>
        </View>
        
        <View style={styles.defaultBackground}>
          <Subheading style={styles.defaultFontColor}>Valeur précédente :{item.previous} </Subheading>
        </View>
        
        <View style={styles.defaultBackground}>
          {controle()}
        </View>
        
        <View style={styles.defaultBackground}>
          <IconButton
            icon="camera"
            color={colors.secondary}
            size={50}
            onPress={toggleOverlay}
          />
        </View>

        <Overlay fullScreen={true} isVisible={cameraOn} onBackdropPress={toggleOverlay}>
          <Camera2 idItem={item.id} />
        </Overlay>

        <View style={customStyles.container}>
          <View style={customStyles.titleContainer}>
            <Text style={customStyles.title}>
              <IconButton
                disabled={buttonDisabledState}
                icon="check-underline-circle"
                color={Colors.blue500}
                size={100}
                onPress={() => handleClick()}
              /></Text>
          </View>
        </View>

        <View style={styles.defaultBackground}>
          <Paragraph style={customStyles.para}><List.Icon color={Colors.dark} icon="alert" /> {item.detail}</Paragraph>
        </View>
      </>
    )

  }
}


/**
 * css
 */

const customStyles = StyleSheet.create({
  containerss: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.dark
  },
  textInputs: {
    height: 25,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    backgroundColor: colors.secondary,
    borderBottomColor: 'black',
    padding: 10
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.dark
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
    padding: 30,
    backgroundColor: colors.dark,
    color: colors.light

  },

  checkPoint: {
    backgroundColor: colors.dark
  },

  para: {
    padding: 8,
    borderWidth: 4,
    borderColor: "#ebae34",
    backgroundColor: colors.secondary,
    color: colors.light,
    textAlign: "left",
    fontSize: 16,
    margin: 20,
    fontWeight: "bold",
  },

  containers: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
})


export default CheckList
