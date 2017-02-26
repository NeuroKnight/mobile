import React, {Component} from 'react'
import {
  Alert,
  AsyncStorage,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Navigator,
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native';
import { Toolbar, Button } from 'react-native-material-ui';
import TopAndBottom from './TopAndBottom.js'
import {MKTextField, MKColor} from 'react-native-material-kit';
const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel();
class Home extends Component {

    constructor(props) {
       super(props);
       console.log(this.props);
       this.state={
           username:"",
           password:"",
           loginText: "Login"
       }
     }
     updateUsername(e){
         this.setState({username:e});
     }
     updatePassword(e){
         this.setState({password:e});
     }
     login(){
         this.setState({loginText: "Logging in..."})
         fetch('https://07bec859.ngrok.io/api/login', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
              })
            }).then((response) => response.json())
              .then((responseJson) => {
                  console.log(responseJson);
                  if(responseJson.status==200){
                      this.props.navigator.replace({
                        id: 'Home',
                        name:'Home'
                        });
                    }else{
                        this.setState({loginText: "Try again"})

                    }
              })
              .catch((error) => {
                console.error(error);
              });


     }
    render() {
        return (
            <Image style={styles.backgroundImage} source={require('./../assets/NightWatchLogo3.png')}>
                <Text style={styles.headerStyle}>Night Watch</Text>
                <View style={styles.containerStyle}>
                    <MKTextField
                      floatingLabelEnabled
                      tintColor={MKColor.Lime}
                      floatingLabelBottomMargin={400}
                      allowFontScaling
                      onTextChange={(e)=>this.updateUsername(e)}
                      textInputStyle={{color: MKColor.Orange}}
                      placeholder="Username"
                      style={styles.textfieldWithFloatingLabel}
                    />

                    <MKTextField
                      floatingLabelEnabled
                      tintColor={MKColor.Lime}
                      floatingLabelBottomMargin={400}
                      allowFontScaling
                      onTextChange={(e)=>this.updatePassword(e)}

                      textInputStyle={{color: MKColor.Orange}}
                      placeholder="Password"
                      password
                      style={styles.textfieldWithFloatingLabel}
                    />
                    <Button style={styles.loginStyle} accent onPress={()=>this.login()} text={this.state.loginText}/>

                </View>
                <View style={styles.bottomStyle}>
                </View>
            </Image>
        );
    }
}


const styles = {
    headerStyle:{
        marginTop: 50,
        color: "#FFFFFF",
        fontSize: 36
    },
    containerStyle:{
        flexDirection: 'column'
    },
    containerStyle:{
        flexDirection: 'column',
        flex:100
    },
    backgroundImage: {
        flex: 100,
        alignSelf: 'stretch',
        width: null,
        alignItems: 'center'
    },
    textfieldWithFloatingLabel: {
        width: 282,
    },
    loginStyle:{
        color: "#FFFFFF",
    }
};


export default Home;
