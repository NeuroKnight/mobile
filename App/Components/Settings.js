import React, {Component} from 'react'
import {
  Alert,
  AsyncStorage,
  StyleSheet,
  Image,
  Text,
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
       this.state = {
           onFile: "None on file",
           beingEntered: "+1",
           checked:false
       };
     }
     saveNumber(){
         this.setState({onFile:this.state.beingEntered});
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
