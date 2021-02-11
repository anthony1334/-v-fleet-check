import React, { useState, useEffect } from 'react';
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Camera } from 'expo-camera';
const Environment = require('./../../../environment.js')


const Camera2 = (idItem) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState({});
    
    
    


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    const snap = async () => {
        if (camera) {
            let photo = await camera.takePictureAsync();
            // ImagePicker saves the taken photo to disk and returns a local URI to it
            let localUri = photo.uri;
            let filename = localUri.split('/').pop();

            // Infer the type of the image
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            // Upload the image using the fetch and FormData APIs
            let formData = new FormData();
            // Assume "photo" is the name of the form field the server expects
            formData.append('photo', { uri: localUri, name: filename, type });
            formData.append('idItem', idItem);
            console.log(JSON.stringify(formData))


            fetch(`${Environment.API}photo`, {
                method: 'POST',
                body: formData,
                headers: {
                    'content-type': 'multipart/form-data'
                }

            })
                .then((response) => {
                    setPhoto(response)
                })
                .catch(() => {
                    console.log("pas de photo")
                })

        }
        else {
            console.log("pas de camera trouvée")
        }

    }

    return (
        
        <View style={{

            flex: 10
        }}>
            <Camera style={{ flex: 10 }} type={type} ref={ref => {
                setCamera(ref);
            }}>
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{
                        flex: 0.1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        snap()
                    }}>
                    <Text style={{ fontSize: 60, marginBottom: 10,textAlign:'center', color: 'white' }}>push</Text>
                </TouchableOpacity>
            </View>
            
              
            </Camera>
        </View>
        
    );
}

const styles = StyleSheet.create({
     /*  containerOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%'
  }   */
})
export default Camera2