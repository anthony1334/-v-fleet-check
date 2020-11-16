import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Login = ({ updateCheckButton }) => {
    const handlePress = (text) => {
        // Call parent props passed
        updateCheckButton(text)
    }

    return (
        <>
            <View>
                <Text>Login form</Text>
                <Button onPress={() => handlePress(`I'm Login component`)}>Click on me</Button>
            </View>
        </>
    )
}

export default Login