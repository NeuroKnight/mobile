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
import { Toolbar, Button, Divider} from 'react-native-material-ui';
import PhoneInput from 'react-native-phone-input'
import CheckBox from 'react-native-check-box'

class Home extends Component {

    constructor(props) {
       super(props);
       console.log(this.props);
       onFile=[]
       this.state = {
           onFile: onFile,
           beingEntered: "+1",
           checked:false,
           name:""
       };
     }

     componentDidMount(){
         fetch('https://07bec859.ngrok.io/api/user/get_relatives', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                token: "1",
              })
            }).then((response) => response.json())
              .then((responseJson) => {
                  if(responseJson.status==200){
                      var person = responseJson.data.results;
                      if(person.length>0){
                          this.setState({onFile:person[0].full_name + " " + person[0].phone})
                      }else{
                          this.setState({onFile: "None found"})
                      }

                  }

              })
              .catch((error) => {
                console.error(error);
              });

     }
     saveNumber(){
         fetch('https://07bec859.ngrok.io/api/user/relative', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                token: "1",
                full_name: this.state.name,
                phone: this.state.beingEntered
              })
            }).then((response) => response.json())
              .then((responseJson) => {
                  if(responseJson.status==200){
                      this.setState({onFile: this.state.name + " " + this.state.beingEntered});

                  }

              })
              .catch((error) => {
                console.error(error);
              });
     }
     updateValue(n){
         this.setState({beingEntered: n})
     }
    render() {
        return (
            <View>

                <Text>Enter a Phone number to be called in case of emergency</Text>
                <Divider/>
                <View>
                    <TextInput value={this.state.name} onChangeText={(text) => this.setState({name: text})} placeholder="Full name"/>
                    <PhoneInput onChangePhoneNumber={(n)=>this.updateValue(n)} value={this.state.beingEntered} textProps={{placeholder:"Phone number"}} style={styles.textInput} ref="phone" />
                    <Button onPress={()=>{this.saveNumber()}} primary text="Save Number" />
                </View>
                <Text>Number On File: {this.state.onFile}</Text>


            </View>
        );
    }
}



const styles = {
    headerStyle:{
        color: "AAABD3"
    },
    centerContainer:{
        flex: 100,
        flexDirection: 'column'
    },
    textInput:{
        marginTop:5
    }
};


export default Home;
