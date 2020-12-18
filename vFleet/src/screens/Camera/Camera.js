import React, { useState, useEffect } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  TouchableHighlight,
} from 'react-native'

import * as Permissions from 'expo-permissions'

import {
  CameraKitCameraScreen
} from 'react-native-camera-kit'

const Camera = ({ navigation }) => {
  const [isPermitted, setIsPermitted] = useState(false)
  const [captureImages, setCaptureImages] = useState([])

  /**
   * Await for permissions OS specifics
   */
  const requestCameraPermission = async () => {
    try {
      const granted = await Permissions.askAsync(
        Permissions.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }

  /**
   * Await for writing permissions OS dependant
   */
  const requestExternalWritePermission = async () => {
    try {
      const granted = await Permissions.askAsync(
        Permissions.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  }

  /**
   * Await for external reading permissions platform dependant
   */
  const requestExternalReadPermission = async () => {
    try {
      const granted = await Permissions.askAsync(
        Permissions.READ_EXTERNAL_STORAGE,
        {
          title: 'Read Storage Permission',
          message: 'App needs Read Storage Permission',
        },
      );
      // If READ_EXTERNAL_STORAGE Permission is granted
      return granted;
    } catch (err) {
      console.warn(err);
      alert('Read permission err', err);
    }
    return false;
  }

  /**
   * Open APN for the current device
   */
  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (await requestCameraPermission()) {
        if (await requestExternalWritePermission()) {
          if (await requestExternalReadPermission()) {
            setIsPermitted(true);
          } else alert('READ_EXTERNAL_STORAGE permission denied');
        } else alert('WRITE_EXTERNAL_STORAGE permission denied');
      } else alert('CAMERA permission denied');
    } else {
      setIsPermitted(true);
    }
  }

  /**
   * Manage capture button event
   */
  const onBottomButtonPressed = (event) => {
    const images = JSON.stringify(event.captureImages);
    if (event.type === 'left') {
      setIsPermitted(false);
    } else if (event.type === 'right') {
      setIsPermitted(false);
      setCaptureImages(images);
    } else {
      Alert.alert(
        event.type,
        images,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  }

    /**
     * Render the final view
     */
    return (
      <SafeAreaView style={{flex: 1}}>
        {isPermitted ? (
          <View style={{flex: 1}}>
            <CameraKitCameraScreen
              // Buttons to perform action done and cancel
              actions={{
                rightButtonText: 'Done',
                leftButtonText: 'Cancel'
              }}
              onBottomButtonPressed={
                (event) => onBottomButtonPressed(event)
              }
              flashImages={{
                // Flash button images
                on: require('./../../../assets/flashon.png'),
                off: require('./../../../assets/flashoff.png'),
                auto: require('./../../../assets/flashauto.png'),
              }}
              cameraFlipImage={require('./../../../assets/flip.png')}
              captureButtonImage={require('./../../../assets/capture.png')}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.titleText}>React Native Camera</Text>
            <Text style={styles.textStyle}>{captureImages}</Text>
            <TouchableHighlight
              onPress={openCamera}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonTextStyle}>Open Camera</Text>
            </TouchableHighlight>
          </View>
        )}
      </SafeAreaView>
    )
}

export default Camera

/**
 * Some stupid React styles...
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
})