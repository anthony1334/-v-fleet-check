import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const Camera2 = () => {
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

        
 fetch(`${Environment.API}photo`, {
            method: 'POST',
            body: formData,
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
        }
        
    };

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
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>push</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
export default Camera2