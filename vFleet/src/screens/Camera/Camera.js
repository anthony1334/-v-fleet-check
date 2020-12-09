/* import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
export default class Camera extends PureComponent {  
    constructor(props) {
  super(props);}
render() {
  return (
    <RNCamera 
      ref={ref => {
        this.camera = ref;
      }}
      captureAudio={false}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }} />
    );
  }}

   */
  import {RNCamera} from 'react-native-camera';
  import   Geolocalisation  from  "@ react-native-community / geolocation" ;

  const geolocation =() => {
    state = {
      location: null
    };
  
    findCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
  
          this.setState({ location });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };
  
    
      return (
        <View style={styles.containerGeolocation}>
          <TouchableOpacity onPress={this.findCoordinates}>
            <Text style={styles.welcome}>Find My Coords?</Text>
            <Text>Location: {this.state.location}</Text>
          </TouchableOpacity>
        </View>
      );
    
  }
  const camera =() =>{
    /*    <RNCamera 
       ref={ref => {
         this.camera = ref;
       }}
       captureAudio={false}
       style={{flex: 1}}
       type={RNCamera.Constants.Type.back}
       androidCameraPermissionOptions={{
         title: 'Permission to use camera',
         message: 'We need your permission to use your camera',
         buttonPositive: 'Ok',
         buttonNegative: 'Cancel',
       }} /> */
       <View style={styles.containerCamera}>
       <RNCamera
         style={{ flex: 1, alignItems: 'center' }}
         ref={ref => {
           this.camera = ref
         }}
       />
     </View>
     }
 const geolocation =() => {
       state = {
         location: null
       };
     
       findCoordinates = () => {
         navigator.geolocation.getCurrentPosition(
           position => {
             const location = JSON.stringify(position);
     
             this.setState({ location });
           },
           error => Alert.alert(error.message),
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
         );
       };
     
       
         return (
           <View style={styles.containerGeolocation}>
             <TouchableOpacity onPress={this.findCoordinates}>
               <Text style={styles.welcome}>Find My Coords?</Text>
               <Text>Location: {this.state.location}</Text>
             </TouchableOpacity>
           </View>
         );
       
     }

     <SafeAreaView styles={{flex:1}}>‍
     {camera()}‍
   </SafeAreaView>
   <View>
     {geolocation}
   </View>
 

 containerCamera: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: 'black'
},
containerGeolocation: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF"
},
welcome: {
  fontSize: 20,
  textAlign: "center",
  margin: 10
},
instructions: {
  textAlign: "center",
  color: "#333333",
  marginBottom: 5
}